import { useEffect } from "react";
import AuthApi from "../api/authApi";
import { useUserStore } from "../stores/useUserStore";

export function useMiniAppAuth(tgData) {
  const setUserStore = useUserStore((s) => s.setUserStore);
  const setUserField = useUserStore((s) => s.setUserField);

  useEffect(() => {
    if (!tgData?.initData) return;

    async function login() {
      try {
        setUserField('loading', true);

        const api = new AuthApi();
        const user = await api.login(tgData.initData);

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