import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const LinkingContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding-top: 120px;

    ${responsive.sm} {
        flex-direction: column;
        padding-top: 100px;
    }

    ${responsive.iPadPro} {
        flex-direction: column;
        align-items: center;
        padding-top: 100px;
    }
`;

export const LinkingTextSection = styled.div`
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

    h4{
        font-weight: 500;
        margin: 50px 0 10px 0;
        color: #1F2A3F;
    }

    h5{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #66C664;
        margin: 10px 0 0 0;

    }

    ${responsive.sm} {
        width: 100%;
    }

    ${responsive.md} {
        width: 46%;
        h1{
            font-size: 45px;
            line-height: 40px;
        }
        h5{
            font-size: 18px;
        }
    }

    ${responsive.iPadPro} {
        width: 57%;
        margin-bottom: 30px;
        h4{
            margin: 35px 0 10px 0;
        }
    }

    ${responsive.xl} {
        width: 28%;
    }

`;

export const QRSection = styled.div`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${responsive.sm} {
        width: 100%;
    }

    ${responsive.iPadPro} {
        width: 75%;
    }

    ${responsive.xl} {
        width: 30%;
    }
`;

export const QRContainer = styled.div`
    width: fit-content;
    padding: 3px 10px 15px 10px;
    background: #FFFFFF;
    box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.19);
    border-radius: 16px;
    margin-bottom: 30px;

    h5{
        margin: 0;
        font-weight: 900;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        color: #000000;
    }
`;

export const CardNumberSection = styled.div`

    ${responsive.sm} {
        text-align: center;
        margin-bottom: 65px;
    }

    ${responsive.iPadPro} {
        margin-bottom: 130px;
    }

`;

export const CardNumberContainer = styled.div`

    display:flex;

    div{
        display:flex;
    }

    ${responsive.sm} {
        justify-content: center;
    }

    button{
        background: #1F2A3F;
        border-radius: 41px;
        height: 32px;
        width: 110px;
        text-align: center;
        cursor: pointer;
        font-weight: 900;
        font-size: 16px;
        line-height: 29px;
        color: #FFFFFF;
        border: 0;
        cursor: pointer;
        margin: 3px 5px 0 20px
    }

    textarea{
        font-size: 16px;
        width: 170px;
        padding-left: 5px;
    }
`;
