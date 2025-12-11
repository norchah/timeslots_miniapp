export function getNormalText(text) {
  if (text === null || text === "") {
    return 'Пусто'
  } else {
    return text
  }
}

export function getDisplayText(fromTg, custom) {
  if (custom === null || custom === "") {
    return fromTg
  } else {
    return custom
  }
}

export function getUserDisplayData(user) {
  // if (!user || !user.id) return {
  //   username: 'user',
  //   name: 'User',
  //   lastname: '',
  //   photoUrl: null
  // };

  // Username: displayName > username > "user+id"
  const username = user.displayName || user.username || `user${user.id}`;

  // Имя: имя пользователя (custom) > имя из Telegram > ""
  const name = user.firstName || username || "User";

  // Фамилия: custom lastname > lastname из Telegram > ""
  const lastname = user.displayLastname || user.lastName || "";

  // Фото: displayPhoto > photoUrl > null
  const photoUrl = user.displayPhoto || user.photoUrl;

  return {username, name, lastname, photoUrl};
}