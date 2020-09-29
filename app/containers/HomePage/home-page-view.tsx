import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page';
import Warning from '../../components/warning';



function HomePageView({ form, loading, showWarning, closeWarning, errorMessage }: { form: FormStateHandler, loading: boolean, showWarning: boolean, closeWarning, errorMessage: string }) {

  return (
    <>
      {showWarning ?
        <Warning
            onClickClose={closeWarning}
            error={errorMessage}
        />
        : null
      }
      <FormPage form={form} text="Create" buttonText="ACTIVATE" loading={loading} />
    </>
  );
}

export default HomePageView;