import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'http://10.9.200.118:3333',
});

export default apiLocal;
