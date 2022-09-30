import axios from 'axios';
import toast from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});

const onError = () => toast.error('Connection error');

export default {
  async get(url) {
    try {
      const { data } = await instance.get(url);
      return data;
    } catch (err) {
      onError(err);
      return Promise.reject();
    }
  },
  async post(url, body) {
    try {
      const { data } = await instance.post(url, body);
      return data;
    } catch (err) {
      onError(err);
      return Promise.reject();
    }
  },
  async put(url, body) {
    try {
      const { data } = await instance.put(url, body);
      return data;
    } catch (err) {
      onError(err);
      return Promise.reject();
    }
  },
  async drop(url) {
    try {
      const { data } = await instance.delete(url);
      return data;
    } catch (err) {
      onError(err);
      return Promise.reject();
    }
  },
};
