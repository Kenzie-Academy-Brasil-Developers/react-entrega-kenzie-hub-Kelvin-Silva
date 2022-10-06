import axios from 'axios';
const token = localStorage.getItem('HubToken');

const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  headers: { Authorization: `Bearer ${token} ` },
  timeout: 5000,
});

export default api;
