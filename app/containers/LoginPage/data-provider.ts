import { LoginInfo } from 'types';
import API from 'helpers/api';
import { Observable } from 'apollo-link';

function login(user: LoginInfo): Promise<{ code: string; }> {
  return API.login(user);
}

function userValid(name: string): Observable<boolean> {
  return API.getValidityObservable(name);
}

function getUser(username: string): Promise<{ cardInfo: { number: string; cvc: string; validity: string}; username: string; balance: number; phoneNumber: string }> {
  return API.getUser(username);
}

const dataProvider = {
  login,
  userValid,
  getUser
};

export default dataProvider;

