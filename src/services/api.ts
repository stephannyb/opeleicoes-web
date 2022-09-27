import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'https://api.eleicoes2022.pm.rn.gov.br/',
});

export default apiLocal;
