import { create } from 'zustand';

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
  lang: 'en',
  texts,

  setLang: (lang) => set({ lang }),

  text: (key) => {
    const { lang, texts } = get();
    return texts[lang]?.[key] ?? key;
  },
}));