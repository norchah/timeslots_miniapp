import React, { useEffect } from "react";
import { TextInput } from "./inputs/textInput";
import ButtonMain from "../buttons/buttonMain";
import { useUserStore } from "../../stores/useUserStore";
import { useEditProfileFormStore } from "../../stores/formStores/useEditProfileFormStore";

export default function BecomeProfiForm() {
  const user = useUserStore();

  const {
    values,
    errors,
    loading,
    setField,
    submit,
    initFromUser,
  } = useEditProfileFormStore();

  useEffect(() => {
    if (user.id) {
      initFromUser(user);
    }
  }, [user.id]);

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

      <ButtonMain type="submit" disabled={loading}>
        {loading ? 'Сохранение…' : 'Сохранить'}
      </ButtonMain>
    </form>
  );
}