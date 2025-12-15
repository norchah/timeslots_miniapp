import {create} from 'zustand';
import ProfiApi from '../api/profiApi';

export const useProfiStore = create((set, get) => ({
  profi: null,
  loading: false,
  error: null,

  loadProfi: async (userId) => {
    if (!userId) return;

    set({loading: true, error: null});

    try {
      const api = new ProfiApi();
      const profi = await api.getById(userId); // или getMe()

      set({
        profi,
        loading: false,
        error: null,
      });
    } catch (e) {
      // 404 = не профи → это НОРМА
      if (e?.status === 404) {
        set({profi: null, loading: false});
      } else {
        set({error: e.message, loading: false});
      }
    }
  },
}));