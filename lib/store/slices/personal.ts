import { create } from 'zustand';
import { PersonalInfo } from '@/lib/types/form';

interface PersonalInfoStore {
  data: PersonalInfo;
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;
}

const initialState: PersonalInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export const usePersonalInfoStore = create<PersonalInfoStore>((set) => ({
  data: initialState,
  setPersonalInfo: (info) =>
    set((state) => ({
      data: { ...state.data, ...info },
    })),
}));