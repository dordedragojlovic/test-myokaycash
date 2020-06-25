import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';
import { ChangeEvent } from 'react';

import { ContainerState as LanguageProviderState } from 'containers/LanguageProvider/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

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

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly language: LanguageProviderState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  // for testing purposes
  readonly test: any;
}

export type FormStateHandler = {
  username: string;
  password: string;
  handleSubmit: () => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type LoginInfo = {
  username: string;
  password: string;
};

export type CreditCard = {
  number: string;
  cvc: string;
  validity: string
};

export type User = {
  name: string;
  code: string;
  qrCode: string;
  cardInfo: CreditCard;
};