import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;

    ${responsive.sm} {
        padding-top: 100px;
    }
`;

export const Section = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 120px;

    ${responsive.sm} {
        flex-direction: column;
        align-items: center;
    }

    ${responsive.iPadPro} {
        flex-direction: column;
    }
`;

export const TextContainer = styled.div`
    width: 44%;
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
        width: 70%;

        span{
            text-transform: lowercase;
        }

    }

    ${responsive.sm} {
        width: 74%;
        margin-bottom: 120px;
    }

    ${responsive.mdpi} {
        h1{
            font-size: 40px;
            line-height: 48px;
        }
        h5{
            font-size: 18px;
        }
    }

    ${responsive.mac} {
        h1{
            font-size: 46px;
            line-height: 55px;
        }
        h5{
            font-size: 18px;
        }
    }

    ${responsive.iPadPro} {
        width: 90%;
        margin-bottom: 80px;
    }
`;

export const InputContainer = styled.div`
    width: 40%;

    input{
        background: #FFFFFF;
        border: 0;
        border-radius: 74px;
        height: 50px;
        width: 52vh;
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

    ${responsive.sm} {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${responsive.iPadPro} {
        width: 100%;
    }
`;