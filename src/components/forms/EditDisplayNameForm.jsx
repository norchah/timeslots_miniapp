import React, {useEffect} from "react";
import {TextInput} from "./inputs/textInput";
import {useUserStore} from "../../stores/useUserStore";
import {useEditProfileFormStore} from "../../stores/formStores/useEditProfileFormStore";
import ButtonSubmit from "../buttons/ButtonSubmit";

export default function EditDisplayNameForm() {
  const user = useUserStore();

  const {
    values,
    errors,
    loading,
    setField,
    setValues,
    submit,
  } = useEditProfileFormStore();

  // 🔹 инициализация формы из user
  useEffect(() => {
    if (!user.id) return;

    setValues({
      displayName: user.displayName || '',
      displayLastname: user.displayLastname || '',
    });
  }, [user.displayName, user.displayLastname, user.id]);

  function handleSubmit(e) {
    e.preventDefault();
    submit(user.id);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 w-full max-w-[420px]"
    >
      <TextInput
        label="Имя"
        value={values.displayName}
        error={errors.displayName}
        onChange={(val) => setField('displayName', val)}
      />

      <TextInput
        label="Фамилия"
        value={values.displayLastname}
        error={errors.displayLastname}
        onChange={(val) => setField('displayLastname', val)}
      />

      {errors.form && (
        <p className="text-red-500 text-sm">{errors.form}</p>
      )}

      <ButtonSubmit disabled={loading}>
        {loading ? 'Сохранение…' : 'Сохранить'}
      </ButtonSubmit>
    </form>
  );
}