import { createContext, Dispatch, SetStateAction } from 'react';
import { User, DeviceInfo } from 'types'

interface ContextModel {
  value: User;
  setContext: Dispatch<SetStateAction<User>>;
}

export const defaultDevice: DeviceInfo = { id: '', certificateId: ''}

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
  devices: [defaultDevice]
};

export const UserContext = createContext<ContextModel>({
  value: defaultUser,
  setContext: () => {},
});