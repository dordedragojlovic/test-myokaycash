import { LoginInfo } from './types';
import { User } from '../../types';
import API from '../../helpers/api';

function login(loginInfo: LoginInfo): Promise<User> {
  return API.getData({ name: 'John' });
}

const dataProvider = {
  login,
};

export default dataProvider;
