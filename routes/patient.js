import { Router } from "express";
import Patient from "../models/patient.js";
import initialPatients from "../data/patientData.js";

const router = Router();

// get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    console.error("Error retrieving patients:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// get a patient by ID
router.get("/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.json(patient);
  } catch (err) {
    console.error("Error retrieving patient:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// add a new patient
router.post("/", async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    console.error("Error adding patient:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// delete the patient from the database
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    // Return a JSON response with status 200
    res
      .status(200)
      .json({ message: `${id} deleted successfully from database` });
  } catch (err) {
    console.error("Error Deleting patient:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update a patient record
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const patient = await Patient.findByIdAndUpdate(id, updates, { new: true });
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }

    res.send(patient);
  } catch (error) {
    res.status(400).send({ message: "Error updating patient", error });
  }
});

// Partial update of a patient record
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const patient = await Patient.findByIdAndUpdate(id, updates, { new: true });
    if (!patient) {
      return res.status(404).send({ message: "Patient not found" });
    }

    res.send(patient);
  } catch (error) {
    res.status(400).send({ message: "Error updating patient", error });
  }
});

// Reset database and load new data
router.post("/resetPatients", async (req, res) => {
  try {
    // Clear the existing database
    await Patient.deleteMany({});

    // Load initial data
    await Patient.insertMany(initialPatients);

    res.status(201).send({ message: "Database reset and initial data loaded" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

export default router;
