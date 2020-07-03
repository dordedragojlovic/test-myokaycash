import React, { useContext } from 'react';
import { UserContext } from 'helpers/userContext';

import Table from 'components/table';
import ActivityTable from 'components/activity-table';
import StyledButton from 'components/button';
import {
    PageContainer,
    Header,
    Text,
    Section,
    Balance,
    Action,
    Actions,
    ExpensesReport,
    DetailsSection
} from './styles';
import { tableData, recentActivitydata } from './data-provider';
import LineChart from 'components/line-chart';
import CopyToClipboard from 'components/copy-to-clipboard';

function Dashboard() {
    const {value, setContext} = useContext(UserContext);

  return (
    <PageContainer>
        <Header>
            <h1>Welcome Back!</h1>
            <h5>Your last login was 30/06/2020 07:22:53 PM CET</h5>
        </Header>
        <Section>
            <Text>
                <h4>Credit card number</h4>
            </Text>
            <Action>
                <CopyToClipboard text={value.cardInfo.number}/>
            </Action>
        </Section>
        <Section>
            <Balance>
                <h4>Total Balance</h4>
                <h1>€16,234.56</h1>
            </Balance>
            <Actions>
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"0.9rem" }} text="New Payment" submit={false} />
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"0.9rem" }} text="Make Transfer" submit={false} />
            </Actions>
        </Section>
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
