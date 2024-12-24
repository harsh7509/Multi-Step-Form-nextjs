// Personal Information
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// Address Details
export interface AddressDetails {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

// User Preferences
export interface Preferences {
  notifications: boolean;
  newsletter: boolean;
  updates: boolean;
}

// Form Meta Data
export interface FormMeta {
  currentStep: number;
  isSubmitting: boolean;
  lastUpdated: string;
}

// Complete Form Data
export interface FormData extends PersonalInfo, AddressDetails, Preferences, FormMeta {}