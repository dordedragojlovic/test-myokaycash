import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { withApollo } from '@apollo/react-hoc';
import { LoginInfo, User } from './types';
import { FormStateHandler } from 'types'
import dataProvider from './data-provider';
import HomePageView from './home-page-view';
import LinkingView from './linking-view';


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



function HomePage(props) {
  const [user, setUser] = useState(dataProvider.defaultUser);
  const history = useHistory();

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async (values) => {
      try {
        const { code, qrCode, cardInfo } = await dataProvider.createUser(values, props.client);

        const userData: User = {
          name: values.username,
          code,
          qrCode,
          cardInfo
        }

        setUser(userData);
       
      } catch (error) {
        console.log('Something went wrong...', error);
      }
    },
  });
  
 if(user.code !== ''){
  return <LinkingView user={user}/>;
 }

  return <HomePageView form={form} />;
}

export default withApollo(HomePage)