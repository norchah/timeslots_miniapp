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
      id: data.userId,             // имя поля должно совпадать с бекендом
      display_name: data.displayName,
      display_lastname: data.displayLastname,
    };
    console.log('PROFI API, CREATE - PAYLOAD::::::::::::::   ', payload)
    const res = await this.api.post('/', payload);
    return camelcaseKeys(res.data, {deep: true});
  }

  async getById(userId) {
    console.log('PROFI API, GET_BY_ID - PAYLOAD::::::::::::::   ', payload)
    const res = await this.api.get(`/${userId}/`);
    return camelcaseKeys(res.data, {deep: true});
  }
}