import { FormStateHandler } from 'types';
import React from 'react';
import FormPage from 'components/form-page';
import Warning from 'components/warning';
import UserForm from 'components/form-page/user-form';

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
        text="Create your account on"
        textSmall={"Enter you credentials to create your account"}
        buttonText="ACTIVATE"
        loading={loading}
        body={UserForm}
      />
    </>
  );
}

export default HomePageView;
