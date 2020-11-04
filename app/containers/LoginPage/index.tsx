import React, { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from 'helpers/userContext';

import { FormStateHandler } from 'types';
import { useHistory } from 'react-router-dom';
import LoginView from './view';
import SecretCodeView from './secret-code-view';
import { useFormik } from 'formik';
import dataProvider from './data-provider';
import onError from 'components/warning/on-error';
import { LoginInfo, User } from 'types';

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

function LoginPage() {
  const {value, setContext} = useContext(UserContext);
  const [secretCode, setSecretCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  function closeWarning() {
    setError('');
  }
  
  const getUserData = async ( username ) =>{
    try {
      const { cardInfo, balance, phoneNumber } = await dataProvider.getUser(username);

      const userData: User = {
        ...value
      }

      userData.cardInfo = cardInfo;
      userData.balance = balance;
      userData.name = username;
      userData.phoneNumber = phoneNumber;
  
      setContext(userData);
      
    } catch (err) {
      console.log('Something went wrong...Error message: ', err);
    }
  }

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async values => {
      try {
        setLoading(true);
        const { code } = await dataProvider.login(values);
        setSecretCode(code);

        const observable = dataProvider.userValid(values.username);
        observable.subscribe((res) => {
          if(res){
            setLoading(false);
            getUserData(values.username);
            history.push('/dashboard');
          }
          });
      
      } catch (error) {
        console.log('Something went wrong...', error);
        onError(error.message, setError, setLoading);
      }
    },
  });

  if(secretCode !== ''){
    return <SecretCodeView secretCode={secretCode}/>;
   }

  return (
    <LoginView
      form={form}
      loading={loading}
      closeWarning={closeWarning}
      errorMessage={error}
    />
  );
}

export default LoginPage;
