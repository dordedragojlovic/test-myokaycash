import { FormStateHandler } from 'types';
import React from 'react';
import { TextContainer, PageContainer, InputContainer, Section } from './styles';
import StyledButton from 'components/button'



function FormPage({ form, text, buttonText }: { form: FormStateHandler, text: string, buttonText: string }) {

  return (
    <form onSubmit={form.handleSubmit}>
        <PageContainer>
            <Section>
                <TextContainer>
                <h1>{text} your account on My<span>OKAY</span>Cash</h1>
                <h5>Enter you credentials to <span>{text}</span>  your account</h5>
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
                            type="password"
                            value={form.password}
                            onChange={form.onPasswordChange}
                        />
                    </div>
                </InputContainer>
            </Section>
            <StyledButton theme={ {color:"#66C664", width:"233px", height:"68px", font:"25px" }} text={buttonText} submit={true} />
        </PageContainer>
    </form>
  );
}

export default FormPage;