import styled from 'styled-components';
import { responsive } from 'styles/responsive';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  justify-content: end;
  align-items: baseline;
  width: 16%;

  ${responsive.sm} {
    width: 46%;
  }
  ${responsive.md} {
    width: 30%;
  }
  ${responsive.mdpi} {
      width: 30%;
  }
  ${responsive.mac} {
      width: 24%;
  }
  ${responsive.lg} {
      width: 20%;
  }
  ${responsive.iPadPro} {
    width: 31%;
  }

  h4{
    color: #66C664;
    font-weight: 400;
    margin-left: 15px;
  }

`;

export const Balance = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  h4{
    color: #66C664;
    margin-right: 30px;
    font-weight: 400;
    margin-left: 15px; 
  }

  ${responsive.sm} {
      h1{
        font-size: 1.2rem;
      }
    }
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: baseline;
  h1{
    color: #66C664;
    margin-right: 30px;
  }
  h5{
    margin: 0;
    font-weight: 400; 
  }
`;

export const Section = styled.div`
  display: flex;
  background: #FFFFFF;
  margin-bottom: 30px;
  padding: 0 30px;
  justify-content: space-between; 
`;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
`;

export const Actions = styled.div`
  width: 28%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${responsive.sm} {
    width: 55%;
  }

  ${responsive.md} {
    width: 46%;
  }
  ${responsive.mdpi} {
      width: 37%;
  }
  ${responsive.mac} {
      width: 32%;
  }
  ${responsive.iPadPro} {
    width: 43%;
  }
`;

export const ExpensesReport = styled.div`
   width: 49%;
   background: #fff;

   ${responsive.sm} {
      width: 100%;
      margin-top: 30px;
    }

    ${responsive.md} {
      width: 100%;
      margin-top: 30px;
    }

    ${responsive.iPadPro} {
      width: 100%;
      margin-top: 30px;
    }
`;

export const DetailsSection = styled.div`
    display: flex;
    justify-content: space-between;

    ${responsive.sm} {
      flex-direction: column;
    }

    ${responsive.md} {
      flex-direction: column;
    }

    ${responsive.iPadPro} {
      flex-direction: column;
    }
`;