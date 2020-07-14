import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page'



function HomePageView({ form }: { form: FormStateHandler }) {

  return (
    <FormPage form={form} text="Create" buttonText="ACTIVATE"  />
  );
}

export default HomePageView;