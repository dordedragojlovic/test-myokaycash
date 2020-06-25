import React, { ChangeEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { withApollo } from '@apollo/react-hoc';
import dataProvider from './data-provider';
import HomePageView from './view';
import { FormStateHandler, LoginInfo } from './types';


function useForm(configuration: {
  initialValues: LoginInfo;
  onSubmit: (values: LoginInfo) => void;
}): FormStateHandler {
  const form = useFormik<LoginInfo>({
    ...configuration,
    enableReinitialize: true,
  });

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('username', event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue('password', event.target.value);
  };

  return {
    username: form.values.username,
    password: form.values.password,
    handleSubmit: form.handleSubmit,
    onPasswordChange,
    onUsernameChange,
  };
}



function HomePage(props) {
  const history = useHistory();

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async (values) => {
      try {

        const response = await dataProvider.createUser(values, props.client);

        console.log('response',response)

        // history.push('/linking');

      } catch (error) {
        console.log('Something went wrong...', error);
      }
    },
  });


  return <HomePageView form={form} />;
}

export default withApollo(HomePage)