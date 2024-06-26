import axios from 'axios';

const api = axios.create({
  baseURL: 'https://191.101.234.241:3000', // A base URL da sua API
 //  baseURL: 'http://localhost:3000'
});


export default api;