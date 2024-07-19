import request from "supertest";
import sinon from "sinon";
import Patient from "../models/patient.js";
import app from "../app.js";

describe("Schema Metadata Route", () => {
  const mockSchemaPaths = {
    name: {
      instance: "String",
      isRequired: true,
    },
    address: {
      instance: "String",
      isRequired: false,
      schema: {
        paths: {
          street: {
            instance: "String",
            isRequired: false,
          },
        },
      },
    },
  };

  afterEach(() => {
    sinon.restore();
  });

  it("should retrieve schema metadata for patients", async () => {
    sinon.stub(Patient, "schema").value({
      paths: mockSchemaPaths,
    });

    const expectedMetadata = {
      name: { type: "String", required: true },
      address: {
        type: "String",
        required: false,
        fields: {
          street: { type: "String", required: false },
        },
      },
    };

    const res = await request(app).get("/api/schemas/patients");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expectedMetadata);
  });

  it("should handle errors when retrieving schema metadata for patients", async () => {
    sinon.stub(Patient, "schema").get(() => {
      throw new Error("Server error");
    });

    const res = await request(app).get("/api/schemas/patients");

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("error", "Server error");
  });
});
