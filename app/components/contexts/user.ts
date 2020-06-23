import { createContext } from 'react';
import { UserStateHandler } from '../../types';

const defaultValue: UserStateHandler = {
  loading: true,
  error: undefined,
  user: undefined,
  setUser: () => {},
};

const UserContext = createContext(defaultValue);

export default UserContext;
