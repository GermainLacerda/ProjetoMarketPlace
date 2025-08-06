// src/api/axiosInstance.js
import axios from 'axios';

axios.defaults.withCredentials = true;
const apiURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});

const csrf = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

export { api, csrf };
