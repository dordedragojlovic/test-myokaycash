import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
`;

export const Section = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const TextContainer = styled.div`
    width: 40%;
    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 55px;
        line-height: 64px;
        color: #1F2A3F;
        margin: 0;

        span{
            color: #66C664;
        }
    }

    h5{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #66C664;
        margin: 10px 0 0 0;

    }
`;

export const InputContainer = styled.div`
    width: 40%;

    input{
        background: #FFFFFF;
        border: 0;
        border-radius: 74px;
        height: 50px;
        width: 520px;
        font-weight: 400;
        font-size: 1.5rem;
        padding-left: 15px;
    }

    h3{
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: rgba(0, 0, 0, 0.25);
        margin: 0 0 10px 0;
    }

    div:first-of-type{
        margin-bottom: 60px;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    background: #66C664;
    border-radius: 41px;
    height: 68px;
    width: 233px;
    display: flex;
    justify-content: center;
    margin-top: 120px;

    button{
        font-weight: 900;
        font-size: 25px;
        line-height: 29px;
        color: #FFFFFF;
        border: 0;
        background: transparent;
    }
`;

