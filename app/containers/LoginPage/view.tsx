import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page';

function LoginView({ form, loading }: { form: FormStateHandler, loading:boolean }) {

  return (
    <FormPage form={form} text="Enter" buttonText="ENTER" loading={loading} />
  );
}

export default LoginView;