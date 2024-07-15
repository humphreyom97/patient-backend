import mongoose from "mongoose";
const Schema = mongoose.Schema;

const contactInfoSchema = new Schema({
  email: { type: String, required: false },
  phone: { type: String, required: false },
  address: { type: String, required: false },
});

const personalInfoSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  contactInfo: contactInfoSchema,
});

const medicalHistorySchema = new Schema({
  condition: { type: String, required: false },
  diagnosisDate: { type: Date, required: false },
  notes: { type: String, required: false },
});

const currentMedicationsSchema = new Schema({
  name: { type: String, required: false },
  dosage: { type: String, required: false },
  frequency: { type: String, required: false },
  startDate: { type: Date, required: false },
});

const appointmentSchema = new Schema({
  date: { type: Date, required: false },
  time: { type: String, required: false },
  doctor: { type: String, required: false },
  reason: { type: String, required: false },
  notes: { type: String, required: false },
});

const prescriptionSchema = new Schema({
  medication: { type: String, required: false },
  dosage: { type: String, required: false },
  frequency: { type: String, required: false },
  datePrescribed: { type: Date, required: false },
  prescribingDoctor: { type: String, required: false },
});

const vitalsSchema = new Schema({
  date: { type: Date, required: false },
  bloodPressure: { type: String, required: false },
  heartRate: { type: String, required: false },
  temperature: { type: String, required: false },
  notes: { type: String, required: false },
});

const insuranceInfoSchema = new Schema({
  provider: { type: String, required: false },
  policyNumber: { type: String, required: false },
  validUntil: { type: Date, required: false },
});

const emergencyContactsSchema = new Schema({
  name: { type: String, required: false },
  relation: { type: String, required: false },
  phone: { type: String, required: false },
});

const patientSchema = new Schema({
  personalInfo: personalInfoSchema,
  medicalHistory: [medicalHistorySchema],
  currentMedications: [currentMedicationsSchema],
  appointments: [appointmentSchema],
  prescriptions: [prescriptionSchema],
  vitals: [vitalsSchema],
  insuranceInfo: [insuranceInfoSchema],
  emergencyContacts: [emergencyContactsSchema],
});

const Patient = mongoose.model("Patient", patientSchema, "patients");

export default Patient;
