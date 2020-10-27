import React, { useContext, useState, ChangeEvent } from 'react';
import { UserContext } from 'helpers/userContext';

import AddIcon from 'components/icons/add';
import CreditCard from 'components/icons/creditCard';
import Phone from 'components/icons/phone';
import MoneBag from 'components/icons/money';

import Table from 'components/table';
import ActivityTable from 'components/activity-table';
import StyledButton from 'components/button';
import IconButton from 'components/icon-button';
import { useFormik } from 'formik';
import { User, PhoneNumber, FormPhoneStateHandler } from 'types';
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
import dataProvider from './data-provider';
import LineChart from 'components/line-chart';
import CopyToClipboard from 'components/copy-to-clipboard';
import Popup from 'components/popup';
import PhoneNumberForm from 'components/popup/phoneNumber';

function phoneNumberForm(configuration: {
    initialValues: PhoneNumber;
    onSubmit: (values: PhoneNumber) => void;
  }): FormPhoneStateHandler {
    const form = useFormik<PhoneNumber>({
      ...configuration,
      enableReinitialize: true,
    });
  
    const onNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
      form.setFieldValue('number', event.target.value);
    };
  
    return {
      number: form.values.number,
      handleSubmit: form.handleSubmit,
      onNumberChange,
    };
  }


function Dashboard() {
    const {value, setContext} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const form = phoneNumberForm({
        initialValues: { number: '' },
        onSubmit: async (values) => {
          try {
            // setLoading(true);
            // const { number  } = await dataProvider.addPhoneNumber(values, value.name );

            // const userData: User = {
            //   ...value
            // }
            // userData.phoneNumber.push(number);

            // setContext(userData);

            closePopup()

          } catch (error) {
            console.log('Something went wrong...Error message: ', error);
          }
        },
      });

    function closePopup() {
        setShowPopup(!showPopup)
      }
    
    function closeOnOutOfFocuse(e) {
        e.stopPropagation()
        const component = e.target ? e.target.className : '';
        if ( typeof component === 'string'){
          component.includes('PopupWrapper')
            ? setShowPopup(!showPopup)
            : null;
        }
      }

  return (
    <PageContainer>
        <Header>
            <h1>Welcome Back!</h1>
            <h5>Your last login was 30/06/2020 07:22:53 PM CET</h5>
        </Header>
        <Section>
            <Text>
              <CreditCard/>
                <h4>Credit card number</h4>
            </Text>
            <Action>
                <CopyToClipboard text={value.cardInfo.number}/>
            </Action>
        </Section>
        <Section>
            <Text>
              <Phone/>
                <h4>Phone number</h4>
            </Text>
            <Action>
              <h4>+3811234567</h4>
                <IconButton text={"Add number"} icon={AddIcon} onClick={closePopup}/>
                {showPopup ?
                    <Popup
                        body={PhoneNumberForm}
                        header={"Add thrusted phone number"}
                        form={form}
                        closePopup={closePopup}
                        onClickClose={closeOnOutOfFocuse}
                        loading={loading}
                    />
                    : null
                }
            </Action>
        </Section>
        <Section>
            <Balance>
              <MoneBag/>
                <h4>Total Balance</h4>
                <h1>€{value.balance}</h1>
            </Balance>
            <Actions>
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"0.9rem" }} text="New Payment" submit={false} loading={false} />
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"0.9rem" }} text="Make Transfer" submit={false} loading={false} />
            </Actions>
        </Section>
        <Table title="All Accounts" columns={dataProvider.tableData.column} rows={dataProvider.tableData.row}/>
        <DetailsSection>
            <ActivityTable data={dataProvider.recentActivitydata}/>
            <ExpensesReport>
                <LineChart/>
            </ExpensesReport>
        </DetailsSection>
    </PageContainer>
  );
}

export default Dashboard;
