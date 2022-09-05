import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'http://10.9.202.241:3333',
});

export default apiLocal;
