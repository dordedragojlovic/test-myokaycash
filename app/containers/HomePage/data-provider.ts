import { LoginInfo, User } from 'types';
import API from 'helpers/api';

function createUser(loginInfo: LoginInfo): Promise<{ code: string; qrCode: string;  cardInfo: { number: string; cvc: string; validity: string} }> {
  return API.createUser(loginInfo);
}

const defaultUser: User = {
    name: '', 
    code: '',
    qrCode: '',
    cardInfo: { 
      number: '',
      cvc: '',
      validity: ''
      }
};

const dataProvider = {
  createUser,
  defaultUser
};

export default dataProvider;

