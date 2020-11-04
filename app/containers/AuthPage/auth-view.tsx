import { FormAuthStateHandler } from 'types';
import React from 'react';
import Warning from 'components/warning';
import FormPage from 'components/form-page';
import AuthForm from 'components/form-page/auth-form';

function AuthPageView({
  form,
  loading,
  closeWarning,
  errorMessage,
}: {
  form: FormAuthStateHandler;
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
        text="Confirm your payment with"
        textSmall={"Enter secret code you received over call to finish your transaction."}
        buttonText="CONFIRM"
        loading={loading}
        body={AuthForm}
      />
    </>
  );
}

export default AuthPageView;