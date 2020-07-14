import React, { ChangeEvent, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginInfo, User } from 'types';
import { FormStateHandler } from 'types'
import dataProvider from './data-provider';
import HomePageView from './home-page-view';
import LinkingView from './linking-view';
import { UserContext } from 'helpers/userContext';

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
  const {value, setContext} = useContext(UserContext);
  const history = useHistory();

  const form = useForm({
    initialValues: { username: '', password: '' },
    onSubmit: async (values) => {
      try {
        const { code, qrCode, cardInfo } = await dataProvider.createUser(values);
        const observable = dataProvider.userLinked(values.username);
        observable.subscribe((value) => {
          if(value){
            history.push('/linking-success');
          }
        });

        const userData: User = {
          name: values.username,
          code,
          qrCode,
          cardInfo
        }
        
        setContext(userData);
       
      } catch (error) {
        console.log('Something went wrong...Error message: ', error);
      }
    },
  });
  
 if(value.code !== ''){
  return <LinkingView user={value}/>;
 }
 
  return <HomePageView form={form} />;
}

export default HomePage