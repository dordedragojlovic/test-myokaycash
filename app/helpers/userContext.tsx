import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from 'types'

interface ContextModel {
  value: User;
  setContext: Dispatch<SetStateAction<User>>;
}

export const defaultUser: User = {
  name: '',
  code: '',
  qrCode: '',
  cardInfo: {
    number: '',
    cvc: '',
    validity: '',
  },
  balance: 0,
  phoneNumber: ''
};

export const UserContext = createContext<ContextModel>({
  value: defaultUser,
  setContext: () => {},
});
