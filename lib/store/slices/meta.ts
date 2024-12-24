import { create } from 'zustand';
import { FormMeta } from '@/lib/types/form';

interface MetaStore {
  data: FormMeta;
  setMeta: (meta: Partial<FormMeta>) => void;
}

const initialState: FormMeta = {
  currentStep: 1,
  isSubmitting: false,
  lastUpdated: new Date().toISOString(),
};

export const useMetaStore = create<MetaStore>((set) => ({
  data: initialState,
  setMeta: (meta) =>
    set((state) => ({
      data: { ...state.data, ...meta },
    })),
}));