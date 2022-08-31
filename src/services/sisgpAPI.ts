/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

export const sisgpAPI = axios.create({
  baseURL: 'https://www3.pm.rn.gov.br/sisgpws/api/v2/rotaweb',
  // baseURL: 'http://10.9.192.101/sisgpws/api/v2/rotaweb',
  withCredentials: true,
  headers: {
    // Token: token,
    Accept: 'application/json',
  },
});

class ApiSisgp {
  public async getToken(cpf: string): Promise<string> {
    let token = '';
    const { base64encode } = require('nodejs-base64');
    const md5 = require('md5');
    const ip = require('ip');

    const semente = 'ROTAWEB';
    // const cpf = '01718996446';
    const textoBase = `${semente}@${ip.address()}@${cpf}`;
    const texto = base64encode(textoBase);

    const today = new Date();
    const month =
      today.getMonth() + 1 > 9
        ? today.getMonth() + 1
        : `0${today.getMonth() + 1}`;
    const day = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
    const date = `${today.getFullYear()}${month}${day}`;

    const tokenBase = md5(`${date}${semente}${texto}`);

    token = `${tokenBase}@${texto}`;
    return token;
  }

  public async getPolicial(cpf: string) {
    const token = await this.getToken(cpf);
    return sisgpAPI
      .get(`/policialmatricula-cpf/${cpf}`, {
        headers: {
          Token: token,
        },
      })
      .then(res => {
        const { data } = res;
        // console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }
}

export default ApiSisgp;
