import { ChangeEvent } from 'react';

export type LoginInfo = {
  username: string;
  password: string;
};

export type FormStateHandler = {
  username: string;
  password: string;
  handleSubmit: () => void;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
