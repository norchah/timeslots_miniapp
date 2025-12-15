import axios from "axios";
import camelcaseKeys from "camelcase-keys";

export default class TagApi {
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
      tag_name: data.tagName,
    };

    const res = await this.api.post('/', payload);
    return camelcaseKeys(res.data, {deep: true});
  }

  async getById(userId) {
    const res = await this.api.get(`/${userId}/`);
    return camelcaseKeys(res.data, {deep: true});
  }
}