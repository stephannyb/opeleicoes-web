import axios from 'axios';

const apiLocal = axios.create({
  baseURL: 'http://api.eleicoes2022.pm.rn.gov.br',
});

export default apiLocal;
