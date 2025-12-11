import axios from "axios";
import camelcaseKeys from "camelcase-keys";

export class UserApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://norchah.ru/users',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async updateNames(user_id, displayName, displayLastname) {
    const payload = {
      display_name: displayName,
      display_lastname: displayLastname,
    }
    const res = await this.api.patch(`/admin/${user_id}/`, payload);
    return camelcaseKeys(res.data, {deep: true});
  }
}