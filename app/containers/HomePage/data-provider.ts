import { LoginInfo } from 'types';
import API from 'helpers/api';
import { Observable } from 'apollo-link';

function createUser(loginInfo: LoginInfo): Promise<{ code: string; qrCode: string;  cardInfo: { number: string; cvc: string; validity: string} }> {
  return API.createUser(loginInfo);
}

function userLinked(name: string): Observable<boolean> {
  return API.getLinkingObservable(name);
}

const dataProvider = {
  createUser,
  userLinked
};

export default dataProvider;

