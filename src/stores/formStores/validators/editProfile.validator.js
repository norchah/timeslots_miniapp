export function validateEditProfile(values) {
  const errors = {};

  const { displayName, displayLastname } = values;

  if (!displayName || !displayName.trim()) {
    errors.displayName = 'Имя не может быть пустым';
  } else if (displayName.length > 30) {
    errors.displayName = 'Максимум 30 символов';
  }

  if (displayLastname && displayLastname.length > 30) {
    errors.displayLastname = 'Максимум 30 символов';
  }

  return errors;
}