import {create} from 'zustand';

export const useAppSettings = create((set) => ({
  safeTop: null,
  safeBottom: null,

  loading: true,
  error: null,
  heightView: window.innerHeight,

  setSettingsField: (field, value) =>
    set({[field]: value}),
}));