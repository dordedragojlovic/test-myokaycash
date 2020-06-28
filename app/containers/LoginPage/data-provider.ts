import { LoginInfo } from 'types';
import API from 'helpers/api';
import { Observable } from 'apollo-link';

function login(user: LoginInfo): Promise<{ code: string; }> {
  return API.login(user);
}

function userValid(name: string): Observable<boolean> {
  return API.getValidityObservable(name);
}

const dataProvider = {
  login,
  userValid
};

export default dataProvider;

