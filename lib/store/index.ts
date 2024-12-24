import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FormData } from '../types/form';
import { usePersonalInfoStore } from './slices/personal';
import { useAddressStore } from './slices/address';
import { usePreferencesStore } from './slices/preferences';
import { useMetaStore } from './slices/meta';

interface FormStore {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const createFormData = (): FormData => ({
  ...usePersonalInfoStore.getState().data,
  ...useAddressStore.getState().data,
  ...usePreferencesStore.getState().data,
  ...useMetaStore.getState().data,
});

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: createFormData(),
      setFormData: (data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            ...data,
            lastUpdated: new Date().toISOString(),
          },
        })),
      resetForm: () =>
        set({
          formData: createFormData(),
        }),
    }),
    {
      name: 'form-storage',
    }
  )
);