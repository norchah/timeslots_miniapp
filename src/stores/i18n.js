import { create } from 'zustand';

const texts = {
  en: {
    loading: 'Loading...',
    error: 'Something went wrong',
  },
  ru: {
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
  },
};

export const useI18nStore = create((set, get) => ({
  lang: 'en',
  texts,

  setLang: (lang) => set({ lang }),

  t: (key) => {
    const { lang, texts } = get();
    return texts[lang]?.[key] ?? key;
  },
}));