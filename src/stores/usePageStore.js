import {create} from "zustand";

export const usePageStore = create((set) => ({
  mode: 'home', // 'home' | 'homeProfi'
  initialized: false,

  setMode: (mode) => set({mode}),
  setInitialized: () => set({initialized: true}),
}))