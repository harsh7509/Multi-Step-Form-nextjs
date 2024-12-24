import { create } from 'zustand';
import { Preferences } from '@/lib/types/form';

interface PreferencesStore {
  data: Preferences;
  setPreferences: (prefs: Partial<Preferences>) => void;
}

const initialState: Preferences = {
  notifications: false,
  newsletter: false,
  updates: false,
};

export const usePreferencesStore = create<PreferencesStore>((set) => ({
  data: initialState,
  setPreferences: (prefs) =>
    set((state) => ({
      data: { ...state.data, ...prefs },
    })),
}));