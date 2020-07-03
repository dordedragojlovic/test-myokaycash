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
  width: 12%;

  ${responsive.sm} {
    width: 31%;
  }
  ${responsive.md} {
    width: 27%;
  }
  ${responsive.mdpi} {
      width: 20%;
  }
  ${responsive.mac} {
      width: 16%;
  }
  ${responsive.lg} {
      width: 13%;
  }
  ${responsive.iPadPro} {
    width: 15%;
  }

  h4{
    color: #66C664;
    font-weight: 400; 
  }

`;

export const Balance = styled.div`
  display: flex;
  justify-content: end;
  align-items: baseline;

  h4{
    color: #66C664;
    margin-right: 30px;
    font-weight: 400; 
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
    width: 57%;
  }
  ${responsive.mdpi} {
      width: 38%;
  }
  ${responsive.iPadPro} {
    width: 53%;
  }
`;

export const ExpensesReport = styled.div`
   width: 49%;
   background: #fff;

   ${responsive.sm} {
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

    ${responsive.iPadPro} {
      flex-direction: column;
    }
`;