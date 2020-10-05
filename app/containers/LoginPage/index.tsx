import React, { ChangeEvent, useState } from 'react';

import { FormStateHandler } from 'types';
import { useHistory } from 'react-router-dom';
import LoginView from './view'
import SecretCodeView from './secret-code-view';
import { useFormik } from 'formik';
import dataProvider from './data-provider';
import { LoginInfo } from 'types';
import onError from 'components/warning/on-error';
import { defaultError } from 'helpers/userContext';

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
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(defaultError);
  const history = useHistory();

  function closeWarning(){
    setError(defaultError);
  }

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async (values) => {
      try {

        setLoading(true);
        const { code } = await dataProvider.login(values);

        setCode(code);

        const observable = dataProvider.userValid(values.username);
        observable.subscribe((value) => {
          if(value){
            setLoading(false);
            history.push('/dashboard');
          }
        });
      
      } catch (error) {
        console.log('Something went wrong...', error);
        onError(error, setError, setLoading);
      }
    },
  });

  if(code !== ''){
    return <SecretCodeView code={code}/>;
   }

  return (
    <LoginView form={form} loading={loading} showWarning={error.warning} closeWarning={closeWarning} errorMessage={error.errorMsg}/>
  );
}

export default LoginPage;