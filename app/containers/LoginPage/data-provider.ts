import { LoginInfo } from 'types';
import API from 'helpers/api';

function login(user: LoginInfo): Promise<{ code: string; }> {
  return API.login(user);
}

const dataProvider = {
  login
};

export default dataProvider;

