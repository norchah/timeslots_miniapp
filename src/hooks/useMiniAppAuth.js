import {useState, useEffect} from "react";
import {AuthApi} from "../api/authApi.js";


export function useMiniAppAuth(tgData) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    async function login() {
      try {
        // ждем пока tgData загрузится
        if (!tgData) return;

        if (!tgData?.initData || tgData.initData.length === 0) {
          setError("No Telegram initData");
          setAuthLoading(false);
          return;
        }

        const api = new AuthApi();
        const response = await api.login(tgData.initData);

        setUser(response);
        setError(null);

      } catch (err) {
        setError(err.message);
      } finally {
        setAuthLoading(false);
      }
    }

    login();
  }, [tgData]);

  return {user, error, authLoading};
}
