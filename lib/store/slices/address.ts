import { create } from 'zustand';
import { AddressDetails } from '@/lib/types/form';

interface AddressStore {
  data: AddressDetails;
  setAddress: (address: Partial<AddressDetails>) => void;
}

const initialState: AddressDetails = {
  street: '',
  city: '',
  state: '',
  zipCode: '',
};

export const useAddressStore = create<AddressStore>((set) => ({
  data: initialState,
  setAddress: (address) =>
    set((state) => ({
      data: { ...state.data, ...address },
    })),
}));