import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiClient.interceptors.request.use((config) => {
  console.log(config);
  config.headers['x-windy-key'] = process.env.REACT_APP_API_KEY;
  return config;
});

export default apiClient;
