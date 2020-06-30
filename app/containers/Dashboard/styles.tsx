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

  h5{
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

export const TotalBalance = styled.div`
  display: flex;
  background: #FFFFFF;
  margin-bottom: 30px;
  padding: 0 30px;
  justify-content: space-between; 
`;

export const Actions = styled.div`
  width: 28%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${responsive.md} {
      width: 38%;
    }
    ${responsive.sm} {
      width: 57%;
    }
`;

export const ExpensesReport = styled.div`
   width: 49%;

   ${responsive.sm} {
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
`;