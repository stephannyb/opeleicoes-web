import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'http://10.9.201.94:3333',
});

export default apiLocal;
