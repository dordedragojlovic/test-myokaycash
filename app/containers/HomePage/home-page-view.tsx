import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page'



function HomePageView({ form, loading }: { form: FormStateHandler, loading: boolean }) {

  return (
    <FormPage form={form} text="Create" buttonText="ACTIVATE" loading={loading} />
  );
}

export default HomePageView;