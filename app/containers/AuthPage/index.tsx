import React, { ChangeEvent, useState } from 'react';
import { useFormik } from 'formik';
import { AuthInfo } from 'types';
import { FormAuthStateHandler } from 'types';
import onError from 'components/warning/on-error';
import AuthPageView from './auth-view';
import dataProvider from './data-provider';

function authForm(configuration: {
  initialValues: AuthInfo;
  onSubmit: (values: AuthInfo) => void;
}): FormAuthStateHandler {
  const form = useFormik<AuthInfo>({
    ...configuration,
    enableReinitialize: true,
  });

  const onSecretCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('code', event.target.value);
  };

  return {
    code: form.values.code,
    handleSubmit: form.handleSubmit,
    onSecretCodeChange,
  };
}

function AuthPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function closeWarning() {
    setError('');
  }

  const form = authForm({
    initialValues: { id: '1', code: '' },
    onSubmit: async values => {
      try {
        setLoading(true);
        const { confirmed } = await dataProvider.authVoIP(
          values,
        );
        if( !!confirmed ){
            onError('Payment confirmed!', setError, setLoading);
        }
      } catch (error) {
        onError(error.message, setError, setLoading);
      }
    },
  });

  return (
    <AuthPageView
      form={form}
      loading={loading}
      closeWarning={closeWarning}
      errorMessage={error}
    />
  );
}

export default AuthPage;
