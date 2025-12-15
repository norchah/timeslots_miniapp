import axios from "axios";
import camelcaseKeys from "camelcase-keys";

export default class ProfiApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://norchah.ru/profi',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async create(data) {
    const payload = {
    user_id: data.userId,
    display_name: data.displayName,
    display_lastname: data.displayLastname,
  };
    const res = await this.api.post('/', payload);
    return camelcaseKeys(res.data, {deep: true});
  }
}