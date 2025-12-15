import {useEffect} from "react";
import {useAppSettings} from "../stores/useAppSettings";
import {useI18nStore} from "../stores/useI18nStore.js";
import {useUserStore} from "../stores/useUserStore.js";
import {useProfiStore} from "../stores/useProfiStore.js";

export function useMiniAppInit(tgData) {
  const setSettingsField = useAppSettings((s) => s.setSettingsField);
  const setLang = useI18nStore((s) => s.setLang);
  const userId = useUserStore((s) => s.id);
  const loadProfi = useProfiStore((s) => s.loadProfi);

  useEffect(() => {
    if (!tgData) return;

    tgData.ready();

    if (tgData.platform !== "tdesktop") {
      tgData.disableVerticalSwipes?.();
      tgData.lockOrientation?.();
      tgData.requestFullscreen?.();
    }
    const lang =
      tgData.initDataUnsafe?.user?.language_code || 'en';

    useEffect(() => {
      if (!userId) return;
      loadProfi(userId);
    }, [userId]);


    setLang(lang);

    tgData.MainButton.hide?.();
    tgData.enableClosingConfirmation?.();

    const updateInsets = () => {
      setSettingsField('safeTop', tgData.safeAreaInset?.top ?? 0);
      setSettingsField('safeBottom', tgData.safeAreaInset?.bottom ?? 0);
      setSettingsField('heightView', window.innerHeight);
      setSettingsField('widthView', window.innerWidth);
      setSettingsField('loading', false);
    };

    requestAnimationFrame(updateInsets);
    tgData.onEvent('viewportChanged', updateInsets);

    return () => {
      tgData.offEvent?.('viewportChanged', updateInsets);
    };
  }, [tgData]);
}