import {useProfiRegistrationFormStore} from "../../stores/formStores/useProfiRegistrationFormStore.js";
import {TextInput} from "./inputs/textInput.jsx";
import {useUserStore} from "../../stores/useUserStore.js";
import ButtonMain from "../buttons/buttonMain.jsx";
import ButtonSubmit from "../buttons/buttonSubmit.jsx";


export default function ProfiRegistrationForm() {
  const id = useUserStore((s) => s.id)
  const {
    values,
    errors,
    loading,
    setField,
    submit,
  } = useProfiRegistrationFormStore();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      submit(id);
    }}>
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

      {/*<Checkbox*/}
      {/*  checked={values.acceptPolicy}*/}
      {/*  error={errors.acceptPolicy}*/}
      {/*  onChange={(v) => setField('acceptPolicy', v)}*/}
      {/*/>*/}

      <ButtonSubmit type={'submit'} disabled={loading}>
        {loading ? 'Регистрация…' : 'Зарегистрироваться'}
      </ButtonSubmit>
    </form>
  );
}