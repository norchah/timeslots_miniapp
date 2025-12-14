import {useEffect} from "react";
import {useAppSettings} from "../stores/useAppSettings";

export function useMiniAppInit(tgData) {
  const setSettingsField = useAppSettings((s) => s.setSettingsField);
  const setLang = useAppSettings((s) => s.setLang);

  useEffect(() => {
    if (!tgData) return;

    tgData.ready();

    if (tgData.platform !== "tdesktop") {
      tgData.disableVerticalSwipes?.();
      tgData.lockOrientation?.();
      tgData.requestFullscreen?.();
    }

    tgData.MainButton.hide?.();
    tgData.enableClosingConfirmation?.();

    const updateInsets = () => {
      setSettingsField('safeTop', tgData.safeAreaInset?.top ?? 0);
      setSettingsField('safeBottom', tgData.safeAreaInset?.bottom ?? 0);
      setSettingsField('loading', false);
      setLang(tgData.language_code || 'en')
    };

    requestAnimationFrame(updateInsets);
    tgData.onEvent('viewportChanged', updateInsets);

    return () => {
      tgData.offEvent?.('viewportChanged', updateInsets);
    };
  }, [tgData]);
}