import { create } from 'zustand';

export const useUserStore = create((set) => ({
  id: null,
  username: null,
  firstName: null,
  lastName: null,
  photoUrl: null,
  allowsWriteToPm: false,
  isPremium: false,
  languageCode: 'en',
  displayName: null,
  displayLastname: null,

  loading: true,
  error: null,

  setUserField: (field, value) =>
    set({ [field]: value }),

  setUserStore: (user) =>
    set((state) => ({
      ...state,
      ...user,
      loading: true,
      error: null,
    })),
}));