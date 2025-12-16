import { create } from 'zustand';

export const useAppSettings = create((set) => ({
  safeTop: 0,       // сразу 0 вместо null
  safeBottom: 0,    // сразу 0 вместо null
  heightView: window.innerHeight,
  widthView: window.innerWidth,

  loading: true,
  error: null,

  setSettingsField: (field, value) => set({ [field]: value }),
}));