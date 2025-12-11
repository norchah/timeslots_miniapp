import React, {useState} from "react";
import {TextInput} from "./inputs/textInput.jsx";

export default function EditDisplayNameForm({user, onSubmit}) {
  const [values, setValues] = useState({
    displayName: user.displayName || "",
    displayLastname: user.displayLastname || ""
  });

  const [errors, setErrors] = useState({});

  function setField(field, value) {
    setValues(prev => ({...prev, [field]: value}));
  }

  function validate() {
    const newErrors = {};

    if (values.displayName.trim().length === 0) {
      newErrors.displayName = "Имя не может быть пустым";
    }

    if (values.displayName.length > 30) {
      newErrors.displayName = "Максимум 30 символов";
    }

    if (values.displayLastname.length > 30) {
      newErrors.displayLastname = "Максимум 30 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(values);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 w-full max-w-[420px]"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Изменить отображаемые данные
      </h2>

      <TextInput
        label="Имя"
        value={values.displayName}
        error={errors.displayName}
        onChange={(val) => setField("displayName", val)}
        placeholder="Ваше Имя"
      />

      <TextInput
        label="Фамилия"
        value={values.displayLastname}
        error={errors.displayLastname}
        onChange={(val) => setField("displayLastname", val)}
        placeholder="Ваша Фамилия"
      />

      <button
        type="submit"
        className="
          mt-2 py-2 rounded-xl bg-blue-500 text-white
          font-medium transition-all
          active:scale-[0.97]
        "
      >
        Сохранить
      </button>
    </form>
  );
}