const initialData = [
  {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      dob: "1990-01-01T00:00:00.000Z",
      gender: "male",
      contactInfo: {
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Anytown, CA 12345",
      },
    },
    medicalHistory: [
      {
        condition: "Diabetes",
        diagnosisDate: "2010-05-15T00:00:00.000Z",
        notes: "Type 2 diabetes, currently managed with medication.",
      },
      {
        condition: "Hypertension",
        diagnosisDate: "2012-07-20T00:00:00.000Z",
        notes: "Regular blood pressure monitoring required.",
      },
    ],
    currentMedications: [
      {
        name: "Metformin",
        dosage: "500mg",
        frequency: "Twice a day",
        startDate: "2010-06-01T00:00:00.000Z",
      },
      {
        name: "Lisinopril",
        dosage: "20mg",
        frequency: "Once a day",
        startDate: "2012-08-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-07-01T10:00:00.000Z",
        time: "10:00",
        doctor: "Dr. Smith",
        reason: "Routine check-up",
        notes: "Blood pressure check and medication review.",
      },
    ],
    prescriptions: [
      {
        medication: "Metformin",
        dosage: "500mg",
        frequency: "Twice a day",
        datePrescribed: "2024-06-01T00:00:00.000Z",
        prescribingDoctor: "Dr. Smith",
      },
    ],
    vitals: [
      {
        date: "2024-07-10T00:00:00.000Z",
        bloodPressure: "120/80",
        heartRate: "72",
        temperature: "98.6",
        notes: "Vitals normal.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Health Insurance Co.",
        policyNumber: "123456789",
        validUntil: "2025-01-01T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Jane Doe",
        relation: "Spouse",
        phone: "987-654-3210",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "Alice",
      lastName: "Smith",
      dob: "1985-08-15T00:00:00.000Z",
      gender: "female",
      contactInfo: {
        email: "alice.smith@example.com",
        phone: "234-567-8901",
        address: "456 Oak Ave, Sometown, NY 54321",
      },
    },
    medicalHistory: [
      {
        condition: "Asthma",
        diagnosisDate: "2000-10-20T00:00:00.000Z",
        notes: "Exercise-induced asthma, using inhaler as needed.",
      },
    ],
    currentMedications: [
      {
        name: "Albuterol",
        dosage: "90mcg",
        frequency: "As needed",
        startDate: "2000-10-21T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-08-15T11:30:00.000Z",
        time: "11:30",
        doctor: "Dr. Johnson",
        reason: "Follow-up for asthma management",
        notes: "Discuss new symptoms and adjust treatment if necessary.",
      },
    ],
    prescriptions: [
      {
        medication: "Albuterol",
        dosage: "90mcg",
        frequency: "As needed",
        datePrescribed: "2024-08-01T00:00:00.000Z",
        prescribingDoctor: "Dr. Johnson",
      },
    ],
    vitals: [
      {
        date: "2024-08-10T00:00:00.000Z",
        bloodPressure: "110/70",
        heartRate: "65",
        temperature: "98.2",
        notes: "Vitals within normal range.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Medical Insurance Inc.",
        policyNumber: "987654321",
        validUntil: "2024-12-31T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Bob Smith",
        relation: "Sibling",
        phone: "876-543-2109",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "Emily",
      lastName: "Johnson",
      dob: "1975-03-20T00:00:00.000Z",
      gender: "female",
      contactInfo: {
        email: "emily.johnson@example.com",
        phone: "345-678-9012",
        address: "789 Pine St, Anycity, TX 67890",
      },
    },
    medicalHistory: [
      {
        condition: "High Cholesterol",
        diagnosisDate: "2005-12-15T00:00:00.000Z",
        notes: "High LDL levels, managing with diet and medication.",
      },
    ],
    currentMedications: [
      {
        name: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once a day",
        startDate: "2006-01-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-09-01T09:00:00.000Z",
        time: "09:00",
        doctor: "Dr. Brown",
        reason: "Annual check-up",
        notes: "Review cholesterol levels and overall health.",
      },
    ],
    prescriptions: [
      {
        medication: "Atorvastatin",
        dosage: "20mg",
        frequency: "Once a day",
        datePrescribed: "2024-08-15T00:00:00.000Z",
        prescribingDoctor: "Dr. Brown",
      },
    ],
    vitals: [
      {
        date: "2024-08-25T00:00:00.000Z",
        bloodPressure: "130/85",
        heartRate: "70",
        temperature: "98.0",
        notes: "Stable vitals, continue medication as prescribed.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Healthcare Insurance Co.",
        policyNumber: "246813579",
        validUntil: "2024-11-30T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Grace Johnson",
        relation: "Spouse",
        phone: "567-890-1234",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "Michael",
      lastName: "Brown",
      dob: "1982-12-10T00:00:00.000Z",
      gender: "male",
      contactInfo: {
        email: "michael.brown@example.com",
        phone: "456-789-0123",
        address: "321 Maple Ave, Smalltown, OH 45678",
      },
    },
    medicalHistory: [
      {
        condition: "Allergies",
        diagnosisDate: "1990-05-01T00:00:00.000Z",
        notes: "Seasonal allergies, takes antihistamines during spring.",
      },
    ],
    currentMedications: [
      {
        name: "Cetirizine",
        dosage: "10mg",
        frequency: "Once a day",
        startDate: "2000-06-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-10-01T14:00:00.000Z",
        time: "14:00",
        doctor: "Dr. White",
        reason: "Allergy evaluation",
        notes: "Discuss recent symptoms and evaluate treatment plan.",
      },
    ],
    prescriptions: [
      {
        medication: "Cetirizine",
        dosage: "10mg",
        frequency: "Once a day",
        datePrescribed: "2024-09-15T00:00:00.000Z",
        prescribingDoctor: "Dr. White",
      },
    ],
    vitals: [
      {
        date: "2024-09-20T00:00:00.000Z",
        bloodPressure: "115/75",
        heartRate: "68",
        temperature: "98.4",
        notes: "Stable vitals, no concerns at this time.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Insurance Services Ltd.",
        policyNumber: "135792468",
        validUntil: "2025-03-31T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Sarah Brown",
        relation: "Spouse",
        phone: "678-901-2345",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "David",
      lastName: "Lee",
      dob: "1995-06-25T00:00:00.000Z",
      gender: "male",
      contactInfo: {
        email: "david.lee@example.com",
        phone: "567-890-1234",
        address: "987 Elm St, Metroville, FL 34567",
      },
    },
    medicalHistory: [
      {
        condition: "Migraines",
        diagnosisDate: "2010-08-15T00:00:00.000Z",
        notes: "Chronic migraines, managing with prescription medication.",
      },
    ],
    currentMedications: [
      {
        name: "Sumatriptan",
        dosage: "100mg",
        frequency: "As needed",
        startDate: "2010-09-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-11-01T15:30:00.000Z",
        time: "15:30",
        doctor: "Dr. Taylor",
        reason: "Follow-up for migraine treatment",
        notes: "Discuss effectiveness of current medication.",
      },
    ],
    prescriptions: [
      {
        medication: "Sumatriptan",
        dosage: "100mg",
        frequency: "As needed",
        datePrescribed: "2024-10-15T00:00:00.000Z",
        prescribingDoctor: "Dr. Taylor",
      },
    ],
    vitals: [
      {
        date: "2024-10-25T00:00:00.000Z",
        bloodPressure: "125/80",
        heartRate: "70",
        temperature: "98.2",
        notes: "Mild headache reported, otherwise stable.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Health Insurance Services",
        policyNumber: "9876543210",
        validUntil: "2025-06-30T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Karen Lee",
        relation: "Sibling",
        phone: "789-012-3456",
      },
    ],
  },
];

export default initialData;
