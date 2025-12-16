import {useEffect} from "react";
import AuthApi from "../api/authApi";
import {useUserStore} from "../stores/useUserStore";

export function useMiniAppAuth(tgData) {
  const setUserStore = useUserStore((s) => s.setUserStore);
  const setUserField = useUserStore((s) => s.setUserField);

  useEffect(() => {
    if (!tgData?.initData) return;

    async function login() {
      try {
        setUserField('loading', true);

        const authApi = new AuthApi();
        const user = await authApi.login(tgData.initData);
        setUserStore(user);
      } catch (e) {
        setUserField('error', e.message);
      } finally {
        setUserField('loading', false);
      }
    }
    login();
  }, [tgData]);
}