import {create} from 'zustand';

export const useAppSettings = create((set) => ({
  safeTop: null,
  safeBottom: null,
  heightView: window.innerHeight,
  widthView: window.innerWidth,

  loading: true,
  error: null,


  setSettingsField: (field, value) =>
    set({[field]: value}),
}));