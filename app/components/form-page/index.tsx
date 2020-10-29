import { FormStateHandler } from 'types';
import React from 'react';
import { TextContainer, PageContainer, InputContainer, Section } from './styles';
import StyledButton from 'components/button'



function FormPage({ form, text, textSmall, buttonText, loading, body }: { form, text: string, textSmall: string, buttonText: string, loading: boolean, body }) {

    let Body = body;

  return (
    <form onSubmit={form.handleSubmit}>
        <PageContainer>
            <Section>
                <TextContainer>
                <h1>{text} My<span>OKAY</span>Cash</h1>
                <h5>{textSmall}</h5>
                </TextContainer>
                <InputContainer>
                    <Body form={form}/>
                </InputContainer>
            </Section>
            <StyledButton theme={ {color:"#66C664", width:"233px", height:"68px", font:"25px" }} text={buttonText} submit={true} loading={loading}/>
        </PageContainer>
    </form>
  );
}

export default FormPage;