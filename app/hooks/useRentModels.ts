import { create } from 'zustand';

interface rentModel {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRentModel = create<rentModel>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModel;
