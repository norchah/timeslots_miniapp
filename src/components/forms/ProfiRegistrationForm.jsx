import {useProfiRegistrationFormStore} from "../../stores/formStores/useProfiRegistrationFormStore.js";
import {TextInput} from "./inputs/textInput.jsx";
import {useUserStore} from "../../stores/useUserStore.js";
import ButtonSubmit from "../buttons/buttonSubmit.jsx";
import {usePageStore} from "../../stores/usePageStore.js";

export default function ProfiRegistrationForm() {
  const id = useUserStore((s) => s.id);
  const setMode = usePageStore((s) => s.setMode);

  const {
    values,
    errors,
    loading,
    setField,
    submit,
  } = useProfiRegistrationFormStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submit(id);
      // После успешной регистрации Profi → переключаем страницу
      setMode('homeProfi');
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Имя"
        value={values.displayName}
        error={errors.displayName}
        onChange={(v) => setField('displayName', v)}
      />
      <TextInput
        label="Фамилия"
        value={values.displayLastname}
        error={errors.displayLastname}
        onChange={(v) => setField('displayLastname', v)}
      />

      <ButtonSubmit type="submit" disabled={loading}>
        {loading ? 'Регистрация…' : 'Зарегистрироваться'}
      </ButtonSubmit>
    </form>
  );
}