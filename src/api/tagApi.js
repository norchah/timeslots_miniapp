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

  async getById(userId, id) {
    const res = await this.api.get(`/${userId}/${id}/`);
    return camelcaseKeys(res.data, {deep: true});
  }

  async delete(userId, id) {
    const res = await this.api.delete(`/${userId}/${id}/`);
    return camelcaseKeys(res.data, {deep: true});
  }


  async patch(userId, id, tagName) {
    const payload = {
      tag_name: tagName,
    }
    const res = await this.api.patch(`/${userId}/${id}/`, payload);
    return camelcaseKeys(res.data, {deep: true});
  }

}