import { LoginInfo, User } from 'types';
import API from 'helpers/api';
import { Observable } from 'apollo-link';

function createUser(loginInfo: LoginInfo): Promise<{ code: string; qrCode: string;  cardInfo: { number: string; cvc: string; validity: string} }> {
  return API.createUser(loginInfo);
}

function userLinked(name: string): Observable<boolean> {
  return API.getLinkingObservable(name);
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
  userLinked,
  defaultUser
};

export default dataProvider;

