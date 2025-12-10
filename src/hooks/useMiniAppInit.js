import {useEffect, useState} from "react";

export function useMiniAppInit(tgData) {
  const [safeTop, setSafeTop] = useState(null);
  const [safeBottom, setSafeBottom] = useState(null);
  const [safeContentTop, setSafeContentTop] = useState(null);
  const [safeContentBottom, setSafeContentBottom] = useState(null);

  useEffect(() => {
    if (!tgData) return;

    // Блокируем свайпы и режимы (не обязательно, но норм)
    if (tgData.platform !== "tdesktop") {
      tgData.disableVerticalSwipes?.();
      tgData.lockOrientation?.();
      tgData.requestFullscreen?.();
    }

    // Telegram требует ready() прежде чем отдаст корректные safeAreaInset
    tgData.ready();

    // Даем Telegram один кадр чтобы применить инициализацию
    requestAnimationFrame(() => {
      const top = tgData.safeAreaInset?.top ?? 0;
      const bottom = tgData.safeAreaInset?.bottom ?? 0;
      const contentTop = tgData.contentSafeAreaInset?.top ?? 0;
      const contentBottom = tgData.contentSafeAreaInset?.bottom ?? 0;

      setSafeTop(top);
      setSafeBottom(bottom);
      setSafeContentTop(contentTop);
      setSafeContentBottom(contentBottom);


    });

    // подписываемся на изменение viewport (iOS особенно любит менять safeArea после загрузки)
    tgData.onEvent("viewportChanged", () => {
      setSafeTop(tgData.safeAreaInset?.top ?? 0);
      setSafeBottom(tgData.safeAreaInset?.bottom ?? 0);
      setSafeContentTop(tgData.contentSafeAreaInset?.top ?? 0)
      setSafeContentBottom(tgData.contentSafeAreaInset?.bottom ?? 0)
    });

  }, [tgData]);

  return {safeTop, safeBottom, safeContentTop, safeContentBottom};
}
