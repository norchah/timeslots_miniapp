import {create} from 'zustand';
import {useUserStore} from "./useUserStore.js";

const texts = {
  en: {
    loading: 'Loading...',
    error: 'Something went wrong',
    becomeProfi: 'Become Profi',
    switchToProfi: 'switch to Profi'
  },
  ru: {
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
    becomeProfi: 'Стать Профи',
    switchToProfi: 'Переключиться на Профи'
  },
};

export const useI18nStore = create((set, get) => ({
  lang: 'ru',
  texts,

  setLang: (lang) => set({lang}),

  text: (key) => {
    const {lang, texts} = get();
    return texts[lang]?.[key] ?? key;
  },
}));