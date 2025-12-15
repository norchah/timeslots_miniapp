// src/hooks/useHaptic.js
import {useCallback} from 'react';

export function useHaptic() {
  const getHaptic = () =>
    window.Telegram?.WebApp?.HapticFeedback ?? null;

  const impact = useCallback((style = 'light') => {
    const h = getHaptic();
    h?.impactOccurred(style);
  }, []);

  const notification = useCallback((type = 'success') => {
    const h = getHaptic();
    h?.notificationOccurred(type);
  }, []);

  const selection = useCallback(() => {
    const h = getHaptic();
    h?.selectionChanged();
  }, []);

  return {
    impact,        // light | medium | heavy | rigid | soft
    notification,  // success | warning | error
    selection,
  };
}