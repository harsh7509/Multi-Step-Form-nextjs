import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Address Details
  street: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Preferences
  notifications: boolean;
  newsletter: boolean;
  updates: boolean;
  
  // Form Meta
  currentStep: number;
  isSubmitting: boolean;
  lastUpdated: string;
}

interface FormStore {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const initialState: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  notifications: false,
  newsletter: false,
  updates: false,
  currentStep: 1,
  isSubmitting: false,
  lastUpdated: new Date().toISOString(),
};

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: initialState,
      setFormData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            ...data,
            lastUpdated: new Date().toISOString(),
          },
        })),
      resetForm: () => set({ formData: initialState }),
    }),
    {
      name: 'form-storage',
    }
  )
);