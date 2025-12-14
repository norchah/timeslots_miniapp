import React from 'react';
import { useTelegramNavigation } from "../hooks/useTelegramNavigation";
import { getUserDisplayData } from "../utils/utils";
import EditDisplayNameForm from "../components/forms/EditDisplayNameForm";
import UserApi from "../api/userApi";
import ButtonMain from "../components/buttons/buttonMain";
import { useUserStore } from "../stores/useUserStore";
import { useAppSettings } from "../stores/useAppSettings";
import { useI18nStore } from "../stores/useI18nStore.js";

export default function SettingsPage({ navigate, tgData }) {
  useTelegramNavigation(tgData, { backPage: 'home', navigate });

  const user = useUserStore();
  const setUserField = useUserStore((s) => s.setUserField);

  const app = useAppSettings();
  const text = useI18nStore((s) => s.text);

  const { username, name, lastname, photoUrl } =
    getUserDisplayData(user);

  async function saveNames(values) {
    try {
      const api = new UserApi();

      await api.updateNames(
        user.id,
        values.displayName,
        values.displayLastname
      );

      // ✅ обновляем стор ТОЛЬКО после успеха
      setUserField('displayName', values.displayName);
      setUserField('displayLastname', values.displayLastname);

    } catch (e) {
      console.error("Ошибка обновления", e);
      // здесь можно:
      // - toast
      // - modal
      - setUserField('error', e.message)
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <header>
        <h1 className="text-2xl">{text('settings')}</h1>
      </header>

      <main className="w-full">
        <div className="flex flex-col items-center">
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={photoUrl}
            alt="avatar"
          />

          <p>{text('username')}: {username}</p>
          <p>{text('name')}: {user.displayName || name}</p>
          <p>{text('lastname')}: {user.displayLastname || lastname}</p>

          <EditDisplayNameForm
            user={user}
            onSubmit={saveNames}
          />

          <ButtonMain
            navigate={navigate}
            page="becomeProfi"
            tgData={tgData}
            user={user}
          >
            {text('becomeProfi')}
          </ButtonMain>
        </div>
      </main>
    </div>
  );
}