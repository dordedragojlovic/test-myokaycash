import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';
import { ChangeEvent } from 'react';

import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: Saga;
  mode?: SagaInjectionModes;
}

export interface ApplicationRootState {
  readonly router: RouterState;
  readonly language: LanguageProviderState;
}

export type FormStateHandler = {
  username: string;
  password: string;
  handleSubmit: () => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type FormDeviceStateHandler = {
  deviceId: string;
  certificate: string;
  handleSubmit: () => void;
  onDeviceIdChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCertificateChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export interface LoginInfo {
  username: string;
  password: string;
};

export interface DeviceInfo {
  deviceId: string;
  certificate: string;
};

export interface User {
  name: string;
  code: string;
  qrCode: string;
  cardInfo: CardInfo;
}
interface CardInfo {
  number: string;
  cvc: string;
  validity: string;
}
