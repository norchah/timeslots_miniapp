import { create } from 'zustand';

export const useUserStore = create((set) => ({
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  photoUrl: '',
  displayName: '',
  displayLastname: '',

  setDisplayName: (displayName) =>
    set({ displayName }),

  setDisplayLastname: (displayLastname) =>
    set({ displayLastname }),
}));