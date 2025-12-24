import React from 'react';
import {useTagCreateFormStore} from '../../stores/forms/useTagCreateFormStore';
import {useUserStore} from '../../stores/useUserStore';

export default function CreateTagsModal() {
  const userId = useUserStore((s) => s.id);
  const form = useTagCreateFormStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await form.submit(form.values, userId);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        value={form.values.tagName}
        onChange={(e) => form.setField('tagName', e.target.value)}
        placeholder="Название тега"
      />

      <input
        type="color"
        value={form.values.tagColor}
        onChange={(e) => form.setField('tagColor', e.target.value)}
      />

      <button type="submit">Создать</button>
    </form>
  );
}