import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page';
import Warning from 'components/warning';

function HomePageView({
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
      <FormPage
        form={form}
        text="Create"
        buttonText="ACTIVATE"
        loading={loading}
      />
    </>
  );
}

export default HomePageView;
