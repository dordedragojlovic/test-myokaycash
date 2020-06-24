import React, { ChangeEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import dataProvider from './data-provider';
import HomePageView from './view';
import { FormStateHandler, LoginInfo } from './types';
import UserContext from '../../components/contexts/user';

function useForm(configuration: {
  initialValues: LoginInfo;
  onSubmit: (values: LoginInfo) => void;
}): FormStateHandler {
  const form = useFormik<LoginInfo>({
    ...configuration,
    enableReinitialize: true,
  });

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('username', event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('password', event.target.value);
  };

  return {
    username: form.values.username,
    password: form.values.password,
    handleSubmit: form.handleSubmit,
    onPasswordChange,
    onUsernameChange,
  };
}



export default function HomePage() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async (values) => {
      try {
        const user = await dataProvider.login(values);
        setUser(user);
        history.push('/linking');
      } catch (error) {
        console.log('Something went wrong...');
      }
    },
  });

  return <HomePageView form={form} />;;
}
