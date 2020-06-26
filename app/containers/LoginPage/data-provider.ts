import { LoginInfo } from 'types';
import API from 'helpers/api';

function login(user: LoginInfo, client: any): Promise<{ code: string; }> {
  return API.login(user, client);
}

const dataProvider = {
  login
};

export default dataProvider;

