import styled from 'styled-components';

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
`;

export const ExpensesReport = styled.div`
   width: 49%;
`;

export const DetailsSection = styled.div`
    display: flex;
    justify-content: space-between;
`;