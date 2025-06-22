import { create } from 'zustand';

interface loginModel {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModel = create<loginModel>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModel;
