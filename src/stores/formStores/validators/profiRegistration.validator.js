export function validateProfiRegistration(values) {
  const errors = {};

  const {
    displayName,
    displayLastname,
    acceptPolicy,
    inn,
    profiType,
  } = values;

  if (!displayName || !displayName.trim()) {
    errors.displayName = 'Имя обязательно';
  } else if (displayName.length > 30) {
    errors.displayName = 'Максимум 30 символов';
  }

  if (displayLastname && displayLastname.length > 30) {
    errors.displayLastname = 'Максимум 30 символов';
  }

  // ⚠️ пока необязательные, но уже готовы
  if (acceptPolicy === false) {
    errors.acceptPolicy = 'Необходимо принять условия';
  }

  if (inn) {
    if (!/^\d+$/.test(inn)) {
      errors.inn = 'ИНН должен содержать только цифры';
    } else if (inn.length !== 12) {
      errors.inn = 'ИНН должен состоять из 12 цифр';
    }
  }

  if (profiType && !['ip', 'self-employed'].includes(profiType)) {
    errors.profiType = 'Некорректный тип профи';
  }

  return errors;
}