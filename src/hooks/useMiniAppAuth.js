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
        console.log('useMiniAppAuth:::::::: after login. user:::', user)
      } catch (e) {
        console.log('useMiniAppAuth:::::::: in catch')
        setUserField('error', e.message);
      } finally {
        setUserField('loading', false);
        console.log('useMiniAppAuth:::::::: in finally')
      }
    }

    login();
    console.log('useMiniAppAuth:::::::: after login. end or hook', tgData)
  }, [tgData]);
}