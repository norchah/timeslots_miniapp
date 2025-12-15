import {useProfiRegistrationFormStore} from "../../stores/formStores/useProfiRegistrationFormStore.js";

export default function ProfiRegistrationForm() {
  const {
    values,
    errors,
    loading,
    setField,
    submit,
  } = useProfiRegistrationFormStore();

  return (
    <form onSubmit={(e) => { e.preventDefault(); submit(); }}>
      <TextInput
        label="Имя"
        value={values.displayName}
        error={errors.displayName}
        onChange={(v) => setField('displayName', v)}
      />

      <Checkbox
        checked={values.acceptPolicy}
        error={errors.acceptPolicy}
        onChange={(v) => setField('acceptPolicy', v)}
      />

      <ButtonMain disabled={loading}>
        Зарегистрироваться
      </ButtonMain>
    </form>
  );
}