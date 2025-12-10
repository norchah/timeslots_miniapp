import axios from "axios";
import camelcaseKeys from "camelcase-keys";
export class UserApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://norchah.ru/auth/',
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async login(initData) {
    console.log(initData);
    const res = await this.api.post('/login/', {init_data: initData});
    return camelcaseKeys(res.data, {deep: true});
  }

  async checkInitData(initData) {
    const res = await this.api.post('/check', {init_data: initData});
    return camelcaseKeys(res.data, {deep: true});
  }
}