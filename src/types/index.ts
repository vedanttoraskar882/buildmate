export interface PilotSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string;
}

export interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  organisationName?: string;
  general?: string;
}
