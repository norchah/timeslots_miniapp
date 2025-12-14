import { create } from 'zustand';

export const useUserStore = create((set) => ({
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  photoUrl: '',
  allowsWriteToPm: false,
  isPremium: false,
  languageCode: "",
  displayName: '',
  displayLastname: '',

  setField: (field, value) =>
    set({ [field]: value }),
  setDisplayName: (displayName) =>
    set({ displayName }),
  setDisplayLastname: (displayLastname) =>
    set({ displayLastname }),
}));