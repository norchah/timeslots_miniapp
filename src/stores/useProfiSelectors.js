// stores/useProfiSelectors.js
import {useProfiStore} from './useProfiStore';


/** Сам объект профи */
export const useProfi = () =>
  useProfiStore((s) => s.profi);

/** Полное имя профи (каноническое) */
export const useProfiDisplayName = () =>
  useProfiStore((s) => {
    if (!s.profi) return null;

    const name = s.profi.display_name ?? '';
    const lastname = s.profi.display_lastname ?? '';

    return `${name} ${lastname}`.trim();
  });

/** Клиенты профи */
export const useProfiClients = () =>
  useProfiStore((s) => s.profi?.clients ?? []);

/** Теги профи */
export const useProfiTags = () =>
  useProfiStore((s) => s.profi?.tags ?? []);