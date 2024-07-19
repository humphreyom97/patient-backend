import request from "supertest";
import app from "../app.js";
import Patient from "../models/patient.js";
import initialPatients from "../data/patientData.js";
import sinon from "sinon";

describe("Patient Routes", () => {
  let mockPatients;
  let mockPatient;

  beforeEach(() => {
    // Deep copy initialPatients to mockPatients to ensure clean state for each test
    mockPatients = JSON.parse(JSON.stringify(initialPatients));
    mockPatient = mockPatients[0];
    mockPatient._id = "1";
  });

  afterEach(function () {
    // reset spies after each test
    sinon.restore();
  });

  describe("GET /api/patients", () => {
    it("should get all patients", async () => {
      sinon.stub(Patient, "find").resolves(mockPatients);

      const res = await request(app).get("/api/patients");
      expect(res.status).toBe(200);
      expect(res.body).toMatchObject(mockPatients);
    });
  });

  describe("GET /api/patients/:id", () => {
    it("should get a patient by ID", async () => {
      let mockPatient = mockPatients[0];
      mockPatient._id = "1";

      sinon.stub(Patient, "findById").resolves(mockPatient);

      const response = await request(app).get(
        `/api/patients/${mockPatient._id}`
      );

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(mockPatient);
    });

    it("should return 404 if patient not found", async () => {
      sinon.stub(Patient, "findById").resolves(null);

      const response = await request(app).get("/api/patients/invalid-id");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Patient not found" });
    });
  });

  describe("POST /api/patients", () => {
    it("should create a new patient", async () => {
      let mockPatient = mockPatients[0];
      sinon.stub(Patient.prototype, "save").resolves(mockPatient);

      const res = await request(app).post("/api/patients").send(mockPatient);
      expect(res.status).toBe(201);
      expect(res.body).toEqual(mockPatient);
    });

    it("should handle errors when creating a new patient", async () => {
      let mockPatient = mockPatients[0];
      sinon.stub(Patient.prototype, "save").rejects(new Error("Server error"));

      const res = await request(app).post("/api/patients").send(mockPatient);

      expect(res.status).toBe(500);
      expect(res.body).toHaveProperty("error", "Server error");
    });
  });

  describe("DELETE /api/patients/:id", () => {
    it("should delete a patient by ID", async () => {
      let findByIdAndDeleteStub = sinon.stub(Patient, "findByIdAndDelete");
      findByIdAndDeleteStub.resolves({ _id: mockPatient._id });

      const res = await request(app).delete(`/api/patients/${mockPatient._id}`);

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        message: `${mockPatient._id} deleted successfully from database`,
      });
      expect(findByIdAndDeleteStub.calledOnceWith(mockPatient._id)).toBe(true);
    });

    it("should return status 404 if patient is not found", async () => {
      let findByIdAndDeleteStub = sinon.stub(Patient, "findByIdAndDelete");
      findByIdAndDeleteStub.resolves(null);

      const res = await request(app).delete(`/api/patients/${mockPatient._id}`);

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: "Patient not found" });
      expect(findByIdAndDeleteStub.calledOnceWith(mockPatient._id)).toBe(true);
    });

    it("should return status 500 on server error", async () => {
      let findByIdAndDeleteStub = sinon.stub(Patient, "findByIdAndDelete");
      findByIdAndDeleteStub.rejects(new Error("Server error"));

      const res = await request(app).delete(`/api/patients/${mockPatient._id}`);

      expect(res.status).toBe(500);
      expect(res.body).toEqual({ error: "Server error" });
      expect(findByIdAndDeleteStub.calledOnceWith(mockPatient._id)).toBe(true);
    });
  });

  describe("PUT /api/patients/:id", () => {
    it("should update the patient", async () => {
      let findByIdAndUpdateStub = sinon.stub(Patient, "findByIdAndUpdate");
      const updates = {
        name: "Updated Name",
        age: 30,
        condition: "Updated Condition",
      };
      const updatedPatient = { _id: mockPatient._id, ...updates };
      findByIdAndUpdateStub.resolves(updatedPatient);

      const res = await request(app)
        .put(`/api/patients/${mockPatient._id}`)
        .send(updates);

      expect(res.status).toBe(200);
      expect(res.body).toEqual(updatedPatient);
      expect(
        findByIdAndUpdateStub.calledOnceWith(mockPatient._id, updates, {
          new: true,
        })
      ).toBe(true);
    });

    it("should handle errors when updating a patient when patient is not found", async () => {
      let findByIdAndUpdateStub = sinon.stub(Patient, "findByIdAndUpdate");
      const updates = {
        name: "Updated Name",
        age: 30,
        condition: "Updated Condition",
      };
      findByIdAndUpdateStub.resolves(null);

      const res = await request(app)
        .put(`/api/patients/${mockPatient._id}`)
        .send(updates);

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "Patient not found" });
      expect(
        findByIdAndUpdateStub.calledOnceWith(mockPatient._id, updates, {
          new: true,
        })
      ).toBe(true);
    });

    it("should handle errors when updating a patient when there is a server error", async () => {
      let findByIdAndUpdateStub = sinon.stub(Patient, "findByIdAndUpdate");
      const updates = {
        name: "Updated Name",
        age: 30,
        condition: "Updated Condition",
      };
      findByIdAndUpdateStub.rejects(new Error("Error updating patient"));

      const res = await request(app)
        .put(`/api/patients/${mockPatient._id}`)
        .send(updates);

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        message: "Error updating patient",
        error: {},
      });
      expect(
        findByIdAndUpdateStub.calledOnceWith(mockPatient._id, updates, {
          new: true,
        })
      ).toBe(true);
    });
  });

  describe("PATCH /api/patients/:id", () => {
    it("should update the patient", async () => {
      let findByIdAndUpdateStub = sinon.stub(Patient, "findByIdAndUpdate");
      const updates = {
        name: "Updated Name",
        age: 30,
        condition: "Updated Condition",
      };
      const updatedPatient = { _id: mockPatient._id, ...updates };
      findByIdAndUpdateStub.resolves(updatedPatient);

      const res = await request(app)
        .patch(`/api/patients/${mockPatient._id}`)
        .send(updates);

      expect(res.status).toBe(200);
      expect(res.body).toEqual(updatedPatient);
      expect(
        findByIdAndUpdateStub.calledOnceWith(mockPatient._id, updates, {
          new: true,
        })
      ).toBe(true);
    });

    it("should handle errors when updating a patient when patient is not found", async () => {
      let findByIdAndUpdateStub = sinon.stub(Patient, "findByIdAndUpdate");
      const updates = {
        name: "Updated Name",
        age: 30,
        condition: "Updated Condition",
      };
      findByIdAndUpdateStub.resolves(null);

      const res = await request(app)
        .patch(`/api/patients/${mockPatient._id}`)
        .send(updates);

      expect(res.status).toBe(404);
      expect(res.body).toEqual({ message: "Patient not found" });
      expect(
        findByIdAndUpdateStub.calledOnceWith(mockPatient._id, updates, {
          new: true,
        })
      ).toBe(true);
    });

    it("should handle errors when updating a patient when there is a server error", async () => {
      let findByIdAndUpdateStub = sinon.stub(Patient, "findByIdAndUpdate");
      const updates = {
        name: "Updated Name",
        age: 30,
        condition: "Updated Condition",
      };
      findByIdAndUpdateStub.rejects(new Error("Error updating patient"));

      const res = await request(app)
        .patch(`/api/patients/${mockPatient._id}`)
        .send(updates);

      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        message: "Error updating patient",
        error: {},
      });
      expect(
        findByIdAndUpdateStub.calledOnceWith(mockPatient._id, updates, {
          new: true,
        })
      ).toBe(true);
    });
  });

  describe("POST /patients/resetPatients", () => {
    it("should reset the patient database", async () => {
      let deleteManyStub = sinon.stub(Patient, "deleteMany");
      let insertManyStub = sinon.stub(Patient, "insertMany");
      deleteManyStub.resolves();
      insertManyStub.resolves();

      const res = await request(app).post("/api/patients/resetPatients");

      expect(res.status).toBe(201);
      expect(res.body).toEqual({
        message: "Patient Database reset and initial data loaded",
      });
      expect(deleteManyStub.calledOnce).toBe(true);
      expect(insertManyStub.calledOnceWith(initialPatients)).toBe(true);
    });

    it("should return status 400 if there is an error during database operations", async () => {
      let deleteManyStub = sinon.stub(Patient, "deleteMany");
      let insertManyStub = sinon.stub(Patient, "insertMany");
      deleteManyStub.rejects(new Error("Failed to delete documents")); // Simulate error during deletion
      insertManyStub.rejects(new Error("Failed to insert documents")); // Simulate error during insertion

      const res = await request(app).post("/api/patients/resetPatients");

      expect(res.status).toBe(400);
      expect(res.body).toEqual({ error: "Failed to delete documents" });
      expect(deleteManyStub.calledOnce).toBe(true);
      expect(insertManyStub.notCalled).toBe(true);
    });
  });
});
