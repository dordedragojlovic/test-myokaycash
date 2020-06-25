import { FormStateHandler } from './types';
import React from 'react';
import { TextContainer, PageContainer, InputContainer, ButtonContainer, Section } from './styles';



function HomePageView({ form }: { form: FormStateHandler }) {

  return (
    <form onSubmit={form.handleSubmit}>
        <PageContainer>
            <Section>
                <TextContainer>
                <h1>Create your account on My<span>OKAY</span>Cash</h1>
                <h5>Enter you credentials to create your account</h5>
                </TextContainer>
                <InputContainer>
                    <div>
                        <h3>Name</h3>
                        <input
                            value={form.username}
                            onChange={form.onUsernameChange}
                        />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input
                            value={form.password}
                            onChange={form.onPasswordChange}
                        />
                    </div>
                </InputContainer>
            </Section>
            <ButtonContainer>
                <button type={'submit'}>ACTIVATE</button>
            </ButtonContainer>
        </PageContainer>
    </form>
  );
}

export default HomePageView;