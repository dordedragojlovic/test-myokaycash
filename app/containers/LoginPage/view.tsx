import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page';
import Warning from 'components/warning';

function LoginView({
  form,
  loading,
  closeWarning,
  errorMessage,
}: {
  form: FormStateHandler;
  loading: boolean;
  closeWarning;
  errorMessage: string;
}) {
  return (
    <>
      {!!errorMessage && (
        <Warning onClickClose={closeWarning} error={errorMessage} />
      )}
      <FormPage form={form} text="Enter" buttonText="ENTER" loading={loading} />
    </>
  );
}

export default LoginView;
