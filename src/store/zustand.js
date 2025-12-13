import { create } from 'zustand';

export const useUserStore = create((set) => ({
  displayName: '',
  displayLastname: '',

  setDisplayName: (displayName) =>
    set({ displayName }),

  setDisplayLastname: (displayLastname) =>
    set({ displayLastname }),
}));