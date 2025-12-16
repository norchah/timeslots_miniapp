import React from 'react';
import {getUserDisplayData} from "../../utils/utils";
import EditDisplayNameForm from "../../components/forms/EditDisplayNameForm";
import {useUserStore} from "../../stores/useUserStore";
import {useI18nStore} from "../../stores/useI18nStore";
import {useIsPro} from '../../stores/useProfiSelectors';
import {useModalStore} from "../../stores/useModalStore";
import BecomeProfiModal from "../../components/modal/BecomeProfiModal";
import ButtonModal from "../buttons/buttonModal.jsx";
import {useHaptic} from '../../hooks/useHaptic';
import {usePageStore} from "../../stores/usePageStore";

export default function SettingsModal() {
  const open = useModalStore((s) => s.open);
  const close = useModalStore((s) => s.close);
  const isPro = useIsPro();
  const user = useUserStore();
  const text = useI18nStore((s) => s.text);
  const {impact} = useHaptic();
  const setMode = usePageStore((s) => s.setMode);

  const handleProfiButton = () => {
    impact('light');

    if (isPro) {
      // Уже Profi → просто переходим на страницу homeProfi
      close();
      setMode('homeProfi');
    } else {
      // Не Profi → открываем модалку регистрации
      open(() => <BecomeProfiModal/>);
    }
  };

  const {username, name, lastname, photoUrl} = getUserDisplayData(user);

  const buttonText = isPro
    ? text('switchToProfi')
    : text('becomeProfi');

  return (
    <div className="flex flex-col items-center w-full py-4 text-white">
      <header className="mb-4">
        <h1 className="text-2xl">{text('settings')}</h1>
      </header>

      <main className="w-full">
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-[80px] h-[80px] rounded-full"
            src={photoUrl}
            alt="avatar"
          />

          <p>{text('username')}: {username}</p>
          <p>{text('name')}: {user.displayName || name}</p>
          <p>{text('lastname')}: {user.displayLastname || lastname}</p>

          <EditDisplayNameForm/>

          {/* Кнопка теперь вызывает правильный хендлер */}
          <ButtonModal page={handleProfiButton}>
            {buttonText}
          </ButtonModal>
        </div>
      </main>
    </div>
  );
}