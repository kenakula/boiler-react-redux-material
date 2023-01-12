import axios from 'axios';

export const axiosInstance = axios.create({
  timeout: 5000,
  baseURL: 'https://my-api-path.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
