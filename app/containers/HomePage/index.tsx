import React, { ChangeEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginInfo, User } from 'types';
import { FormStateHandler } from 'types';
import dataProvider from './data-provider';
import HomePageView from './home-page-view';
import LinkingView from './linking-view';
import { UserContext } from 'helpers/userContext';
import onError from 'components/warning/on-error';

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

function HomePage() {
  const { value, setContext } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  function closeWarning() {
    setError('');
  }

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async values => {
      try {
        setLoading(true);
        const { code, qrCode, cardInfo } = await dataProvider.createUser(
          values,
        );
        const observable = dataProvider.userLinked(values.username);
        observable.subscribe(value => {
          if (value) {
            setLoading(false);
            history.push('/linking-success');
          }
        });

        const userData: User = {
          name: values.username,
          code,
          qrCode,
          cardInfo,
        };

        setContext(userData);
      } catch (error) {
        // console.log('Something went wrong...Error message: ', error);
        onError(error.message, setError, setLoading);
      }
    },
  });

  if (value.code !== '') {
    return <LinkingView user={value} />;
  }

  return (
    <HomePageView
      form={form}
      loading={loading}
      closeWarning={closeWarning}
      errorMessage={error}
    />
  );
}

export default HomePage;
