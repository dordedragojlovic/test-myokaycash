import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withApollo } from '@apollo/react-hoc';
import { useSubscription } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useFormik } from 'formik';
import { LoginInfo, User } from 'types';
import { FormStateHandler } from 'types'
import dataProvider from './data-provider';
import HomePageView from './home-page-view';
import LinkingView from './linking-view';

const LINKING_SUBSCRIPTION = gql`
  subscription($username: String!) {
    userLinked(username: $username)
  }
`;


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


function HomePage() {
  const [user, setUser] = useState(dataProvider.defaultUser);
  const [linked, setLinked] = useState(false);
  const history = useHistory();

  const subpsription = useSubscription(
    LINKING_SUBSCRIPTION,
    { variables: { username: user.name } }
  );

  console.log("subpsription", subpsription);

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async (values) => {
      try {
        const { code, qrCode, cardInfo } = await dataProvider.createUser(values);

        const userData: User = {
          name: values.username,
          code,
          qrCode,
          cardInfo
        }
        
        setUser(userData);
       
      } catch (error) {
        setLinked(false);
        console.log('Something went wrong...Error message: ', error);
      }
    },
  });
  
 if(user.code !== ''){
  return <LinkingView user={user}/>;
 }

  return <HomePageView form={form} />;
}

export default withApollo(HomePage)