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
  {
    personalInfo: {
      firstName: "Lucas",
      lastName: "Martinez",
      dob: "1988-04-12T00:00:00.000Z",
      gender: "male",
      contactInfo: {
        email: "lucas.martinez@example.com",
        phone: "678-123-4567",
        address: "135 Cedar Rd, Brooksville, FL 12345",
      },
    },
    medicalHistory: [
      {
        condition: "Chronic Fatigue Syndrome",
        diagnosisDate: "2015-02-20T00:00:00.000Z",
        notes: "Ongoing fatigue, managing with lifestyle changes.",
      },
    ],
    currentMedications: [
      {
        name: "Modafinil",
        dosage: "200mg",
        frequency: "Once a day",
        startDate: "2015-03-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-12-01T16:00:00.000Z",
        time: "16:00",
        doctor: "Dr. Lewis",
        reason: "Follow-up on fatigue",
        notes: "Review symptoms and medication effects.",
      },
    ],
    prescriptions: [
      {
        medication: "Modafinil",
        dosage: "200mg",
        frequency: "Once a day",
        datePrescribed: "2024-11-01T00:00:00.000Z",
        prescribingDoctor: "Dr. Lewis",
      },
    ],
    vitals: [
      {
        date: "2024-11-20T00:00:00.000Z",
        bloodPressure: "122/78",
        heartRate: "74",
        temperature: "98.1",
        notes: "Vitals stable.",
      },
    ],
    insuranceInfo: [
      {
        provider: "CarePlus Health",
        policyNumber: "654321987",
        validUntil: "2025-02-28T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Emma Martinez",
        relation: "Spouse",
        phone: "321-654-9870",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "Sophia",
      lastName: "Wilson",
      dob: "1992-07-30T00:00:00.000Z",
      gender: "female",
      contactInfo: {
        email: "sophia.wilson@example.com",
        phone: "789-234-5678",
        address: "246 Maple St, Lakeside, MI 54321",
      },
    },
    medicalHistory: [
      {
        condition: "Hypothyroidism",
        diagnosisDate: "2017-06-10T00:00:00.000Z",
        notes: "Managing with levothyroxine.",
      },
    ],
    currentMedications: [
      {
        name: "Levothyroxine",
        dosage: "75mcg",
        frequency: "Once a day",
        startDate: "2017-07-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-12-15T09:30:00.000Z",
        time: "09:30",
        doctor: "Dr. Clark",
        reason: "Thyroid function check",
        notes: "Review thyroid levels and adjust medication if needed.",
      },
    ],
    prescriptions: [
      {
        medication: "Levothyroxine",
        dosage: "75mcg",
        frequency: "Once a day",
        datePrescribed: "2024-12-01T00:00:00.000Z",
        prescribingDoctor: "Dr. Clark",
      },
    ],
    vitals: [
      {
        date: "2024-12-10T00:00:00.000Z",
        bloodPressure: "118/76",
        heartRate: "69",
        temperature: "97.9",
        notes: "Vitals normal.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Global Health Insurance",
        policyNumber: "321654987",
        validUntil: "2025-05-31T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Liam Wilson",
        relation: "Partner",
        phone: "432-876-5432",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "Olivia",
      lastName: "Taylor",
      dob: "1980-12-05T00:00:00.000Z",
      gender: "female",
      contactInfo: {
        email: "olivia.taylor@example.com",
        phone: "890-345-6789",
        address: "357 Birch St, Springfield, IL 67890",
      },
    },
    medicalHistory: [
      {
        condition: "Gastroesophageal Reflux Disease (GERD)",
        diagnosisDate: "2012-11-12T00:00:00.000Z",
        notes: "Managing with dietary changes and medication.",
      },
    ],
    currentMedications: [
      {
        name: "Omeprazole",
        dosage: "20mg",
        frequency: "Once a day",
        startDate: "2012-12-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-10-20T13:00:00.000Z",
        time: "13:00",
        doctor: "Dr. Robinson",
        reason: "GERD management",
        notes: "Review symptoms and medication effectiveness.",
      },
    ],
    prescriptions: [
      {
        medication: "Omeprazole",
        dosage: "20mg",
        frequency: "Once a day",
        datePrescribed: "2024-09-20T00:00:00.000Z",
        prescribingDoctor: "Dr. Robinson",
      },
    ],
    vitals: [
      {
        date: "2024-10-15T00:00:00.000Z",
        bloodPressure: "124/79",
        heartRate: "71",
        temperature: "98.3",
        notes: "Vitals within normal range.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Elite Health Plan",
        policyNumber: "456789123",
        validUntil: "2025-07-31T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "James Taylor",
        relation: "Husband",
        phone: "543-210-9876",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "Ethan",
      lastName: "Davis",
      dob: "1998-09-16T00:00:00.000Z",
      gender: "male",
      contactInfo: {
        email: "ethan.davis@example.com",
        phone: "901-456-7890",
        address: "468 Oak Rd, Rivertown, CA 12345",
      },
    },
    medicalHistory: [
      {
        condition: "Anxiety Disorder",
        diagnosisDate: "2020-04-05T00:00:00.000Z",
        notes: "Managing with therapy and medication.",
      },
    ],
    currentMedications: [
      {
        name: "Sertraline",
        dosage: "50mg",
        frequency: "Once a day",
        startDate: "2020-05-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-11-15T10:00:00.000Z",
        time: "10:00",
        doctor: "Dr. Mitchell",
        reason: "Follow-up for anxiety management",
        notes: "Evaluate current treatment and adjust if needed.",
      },
    ],
    prescriptions: [
      {
        medication: "Sertraline",
        dosage: "50mg",
        frequency: "Once a day",
        datePrescribed: "2024-10-01T00:00:00.000Z",
        prescribingDoctor: "Dr. Mitchell",
      },
    ],
    vitals: [
      {
        date: "2024-10-10T00:00:00.000Z",
        bloodPressure: "122/80",
        heartRate: "72",
        temperature: "98.5",
        notes: "Vitals stable.",
      },
    ],
    insuranceInfo: [
      {
        provider: "NextGen Health",
        policyNumber: "789012345",
        validUntil: "2025-04-30T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Ava Davis",
        relation: "Mother",
        phone: "654-321-0987",
      },
    ],
  },
  {
    personalInfo: {
      firstName: "Hannah",
      lastName: "Miller",
      dob: "1987-11-22T00:00:00.000Z",
      gender: "female",
      contactInfo: {
        email: "hannah.miller@example.com",
        phone: "678-901-2345",
        address: "543 Willow Lane, Greenfield, WI 67890",
      },
    },
    medicalHistory: [
      {
        condition: "Rheumatoid Arthritis",
        diagnosisDate: "2018-01-10T00:00:00.000Z",
        notes: "Managing symptoms with medication and physical therapy.",
      },
    ],
    currentMedications: [
      {
        name: "Methotrexate",
        dosage: "10mg",
        frequency: "Once a week",
        startDate: "2018-02-01T00:00:00.000Z",
      },
      {
        name: "Hydroxychloroquine",
        dosage: "200mg",
        frequency: "Twice a day",
        startDate: "2018-02-01T00:00:00.000Z",
      },
    ],
    appointments: [
      {
        date: "2024-09-20T10:30:00.000Z",
        time: "10:30",
        doctor: "Dr. Adams",
        reason: "Routine check-up for arthritis management",
        notes:
          "Review medication effectiveness and adjust dosage if necessary.",
      },
    ],
    prescriptions: [
      {
        medication: "Methotrexate",
        dosage: "10mg",
        frequency: "Once a week",
        datePrescribed: "2024-08-15T00:00:00.000Z",
        prescribingDoctor: "Dr. Adams",
      },
      {
        medication: "Hydroxychloroquine",
        dosage: "200mg",
        frequency: "Twice a day",
        datePrescribed: "2024-08-15T00:00:00.000Z",
        prescribingDoctor: "Dr. Adams",
      },
    ],
    vitals: [
      {
        date: "2024-09-10T00:00:00.000Z",
        bloodPressure: "118/76",
        heartRate: "70",
        temperature: "98.4",
        notes: "Vitals stable with no major issues.",
      },
    ],
    insuranceInfo: [
      {
        provider: "Wellness Health Plan",
        policyNumber: "654987321",
        validUntil: "2025-09-30T00:00:00.000Z",
      },
    ],
    emergencyContacts: [
      {
        name: "Michael Miller",
        relation: "Spouse",
        phone: "890-123-4567",
      },
    ],
  },
];

export default initialData;
