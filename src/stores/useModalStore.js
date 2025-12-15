// stores/useModalStore.js
import {create} from "zustand";

export const useModalStore = create((set, get) => ({
  stack: [],

  open: (Component, props = {}) => {
    set((state) => ({
      stack: [...state.stack, {Component, props, id: Date.now()}]
    }));
  },

  close: () => {
    set((state) => ({
      stack: state.stack.slice(0, -1)
    }));
  },

  closeAll: () => set({stack: []}),
}));