import {useTgData} from "./useTgData.js";
import {useMiniAppInit} from "./useMiniAppInit.js";
import {useMiniAppAuth} from "./useMiniAppAuth.js";

export function useMiniApp() {
  const {tgData} = useTgData();                 // 1. WebApp
  const {safeTop, safeBottom} = useMiniAppInit(tgData);  // 2. Init
  const {user, error, authLoading} = useMiniAppAuth(tgData); // 3. Auth

  const uiLoading = !tgData || safeTop === null;  // UI загрузка

  return {
    tgData,
    safeTop,
    safeBottom,
    user,
    loading: uiLoading || authLoading,
    error
  };
}