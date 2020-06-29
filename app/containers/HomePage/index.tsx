import React, { ChangeEvent, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginInfo, User } from 'types';
import { FormStateHandler } from 'types'
import dataProvider from './data-provider';
import HomePageView from './home-page-view';
import LinkingView from './linking-view';

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
  const textAreaRef = useRef(null);
  const history = useHistory();

  function copyToClipboard(e) {

      (textAreaRef as any).current.select();

    document.execCommand('copy');
    e.target.focus();
  };

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
        
        setUser(userData);
       
      } catch (error) {
        console.log('Something went wrong...Error message: ', error);
      }
    },
  });
  
 if(user.code !== ''){
  return <LinkingView user={user} copyToClipboard={copyToClipboard} textAreaRef={textAreaRef}/>;
 }
 
  return <HomePageView form={form} />;
}

export default HomePage