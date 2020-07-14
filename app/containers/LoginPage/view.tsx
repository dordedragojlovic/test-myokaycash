import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page';

function LoginView({ form }: { form: FormStateHandler }) {

  return (
    <FormPage form={form} text="Enter" buttonText="ENTER"  />
  );
}

export default LoginView;