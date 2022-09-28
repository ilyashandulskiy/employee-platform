import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});

export default {
  async get(url) {
    const { data } = await instance.get(url);
    return data;
  },
  async post(url, body) {
    const { data } = await instance.post(url, body);
    return data;
  },
  async put(url, body) {
    const { data } = await instance.put(url, body);
    return data;
  },
  async drop(url) {
    const { data } = await instance.delete(url);
    return data;
  },
};
