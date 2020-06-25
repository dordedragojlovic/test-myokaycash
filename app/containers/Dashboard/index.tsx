import React from 'react';

import Table from 'components/table';
import ActivityTable from 'components/activity-table';
import StyledButton from 'components/button';
import {
    PageContainer,
    Header,
    Text,
    TotalBalance,
    Actions,
    ExpensesReport,
    DetailsSection
} from './styles';
import { tableData, recentActivitydata } from './data-provider';
import LineChart from 'components/line-chart';

function Dashboard() {

  return (
    <PageContainer>
        <Header>
            <h1>Welcome Back!</h1>
            <h5>Your last login was ....</h5>
        </Header>
        <TotalBalance>
            <Text>
                <h5>Total Balance</h5>
                <h1>€16,234.56</h1>
            </Text>
            <Actions>
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"18px" }} text="New Payment" submit={false} />
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"18px" }} text="Make Transfer" submit={false} />
            </Actions>
        </TotalBalance>
        <Table title="All Accounts" columns={tableData.column} rows={tableData.row}/>
        <DetailsSection>
            <ActivityTable data={recentActivitydata}/>
            <ExpensesReport>
                <LineChart/>
            </ExpensesReport>
        </DetailsSection>
    </PageContainer>
  );
}

export default Dashboard;
