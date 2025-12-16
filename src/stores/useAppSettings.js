import { create } from 'zustand';

export const useAppSettings = create((set) => ({
  safeTop: 0,
  safeBottom: 0,
  heightView: window.innerHeight,
  widthView: window.innerWidth,
  loading: true,
  error: null,

  // Флаг, что мы получили реальные safe-зоны (не нулевые)
  hasRealSafeAreas: false,

  setSettingsField: (field, value) => set({ [field]: value }),
  setSafeAreas: (top, bottom) => set({
    safeTop: top,
    safeBottom: bottom,
    // Помечаем, что получили реальные значения, если хотя бы одно не нулевое
    hasRealSafeAreas: !!(top || bottom)
  }),
}));