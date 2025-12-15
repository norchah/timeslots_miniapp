import {create} from 'zustand';

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
  isPro: false,

  loading: true,
  error: null,

  setUserField: (field, value) =>
    set({[field]: value}),

  setUserStore: (user) => set({
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    photoUrl: user.photoUrl,
    allowsWriteToPm: user.allowsWriteToPm,
    isPremium: user.isPremium,
    languageCode: user.languageCode,
    displayName: user.displayName,
    displayLastname: user.displayLastname,
    isPro: user.isPro,
  }),
}));