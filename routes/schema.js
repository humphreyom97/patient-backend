import { Router } from "express";
import Patient from "../models/patient.js";

const router = Router();

// Function to recursively fetch schema paths and metadata
const getSchemaMetadata = (schemaPaths) => {
  const validationMetadata = {};

  Object.keys(schemaPaths).forEach((key) => {
    const path = schemaPaths[key];
    const fieldMetadata = {
      type: path.instance,
      required: path.isRequired,
    };

    // Check if path contains nested schema
    if (path.schema) {
      fieldMetadata.fields = getSchemaMetadata(path.schema.paths);
    }

    validationMetadata[key] = fieldMetadata;
  });

  return validationMetadata;
};

// Retrieve schema metadata for patients
router.get("/patients", async (req, res) => {
  try {
    const schemaPaths = Patient.schema.paths;
    const validationMetadata = getSchemaMetadata(schemaPaths);
    res.json(validationMetadata);
  } catch (err) {
    console.error("Error retrieving schema metadata:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
