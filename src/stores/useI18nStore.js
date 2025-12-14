import { create } from 'zustand';
import {useUserStore} from "./useUserStore.js";

const texts = {
  en: {
    loading: 'Loading...',
    error: 'Something went wrong',
    becomeProfi: 'Стать Профи'
  },
  ru: {
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
    becomeProfi: 'Become Profi',
  },
};

export const useI18nStore = create((set, get) => ({
  lang: useUserStore.getState().languageCode || 'ru', // <-- исправили
  texts,

  setLang: (lang) => set({ lang }),

  text: (key) => {
    const { lang, texts } = get();
    return texts[lang]?.[key] ?? key;
  },
}));