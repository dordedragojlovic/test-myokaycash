import { LoginInfo } from './types';
import API from 'helpers/api'

function createUser(loginInfo: LoginInfo, client: any): Promise<{ code: string; qrCode: string;  cardInfo: { number: string; cvc: string; validity: string} }> {
  return API.createUser(loginInfo, client);
}

const dataProvider = {
  createUser
};

export default dataProvider;

