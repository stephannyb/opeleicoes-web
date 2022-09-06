import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'http://10.0.0.198:3333',
});

export default apiLocal;
