export function getUserDisplayData(user) {
  // Username: displayName > username > "user+id"
  const username = user.username || `user${user.id}`;

  // Имя: имя пользователя (custom) > имя из Telegram > ""
  const name = user.displayName || user.firstName || "User";

  // Фамилия: custom lastname > lastname из Telegram > ""
  const lastname = user.displayLastname || user.lastName || "";

  // Фото: displayPhoto > photoUrl > null
  const photoUrl = user.displayPhoto || user.photoUrl;

  return {username, name, lastname, photoUrl};
}