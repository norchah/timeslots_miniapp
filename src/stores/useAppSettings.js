import { create } from 'zustand';

export const useAppSettings = create((set) => ({
  safeTop: 0,        // по умолчанию 0
  safeBottom: 0,
  heightView: window.innerHeight,
  widthView: window.innerWidth,

  loading: true,
  error: null,

  setSettingsField: (field, value) => set({ [field]: value }),
}));