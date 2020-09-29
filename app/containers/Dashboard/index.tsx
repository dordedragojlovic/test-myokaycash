import React, { useContext, useState, ChangeEvent } from 'react';
import { UserContext } from 'helpers/userContext';

import Table from 'components/table';
import ActivityTable from 'components/activity-table';
import StyledButton from 'components/button';
import { useFormik } from 'formik';
import { FormDeviceStateHandler } from 'types';
import { DeviceInfo } from 'types';
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
import Popup from '../../components/popup';

function deviceForm(configuration: {
    initialValues: DeviceInfo;
    onSubmit: (values: DeviceInfo) => void;
  }): FormDeviceStateHandler {
    const form = useFormik<DeviceInfo>({
      ...configuration,
      enableReinitialize: true,
    });
  
    const onDeviceIdChange = (event: ChangeEvent<HTMLInputElement>) => {
      form.setFieldValue('deviceId', event.target.value);
    };
    const onCertificateChange = (event: ChangeEvent<HTMLInputElement>) => {
      form.setFieldValue('certificate', event.target.value);
    };
  
    return {
      deviceId: form.values.deviceId,
      certificate: form.values.certificate,
      handleSubmit: form.handleSubmit,
      onCertificateChange,
      onDeviceIdChange,
    };
  }


function Dashboard() {
    const {value, setContext} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const form = deviceForm({
        initialValues: { deviceId: '', certificate: '' },
        onSubmit: async (values) => {
          try {
            setLoading(true);
            console.log("radi za sad")
    
            // const userData: User = {
            //   name: values.username,
            //   code,
            //   qrCode,
            //   cardInfo
            // }
            
            // setContext(userData);
           
          } catch (error) {
            console.log('Something went wrong...Error message: ', error);
          }
        },
      });

    function togglePopup() {
        setShowPopup(!showPopup)
      }
    
    function closePopup(e) {
        e.stopPropagation()
        const component = e.target ? e.target.className : '';
        component.includes('PopupWrapper')
          ? setShowPopup(!showPopup)
          : null;
      }

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
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"0.9rem" }} text="New Payment" submit={false} loading={false} />
                <StyledButton theme={ {color:"#1F2A3F", width:"170px", height:"45px", font:"0.9rem" }} text="Make Transfer" submit={false} loading={false} />
                {showPopup ?
                    <Popup
                        form={form}
                        closePopup={togglePopup}
                        onClickClose={closePopup}
                        loading={loading}
                    />
                    : null
                }
            </Actions>
        </Section>
        <Table title="All Accounts" columns={dataProvider.tableData.column} rows={dataProvider.tableData.row} button={false} onClick={togglePopup}/>
        <Table title="Trusted IoT Devices" columns={dataProvider.deviceData.column} rows={dataProvider.deviceData.row} button={true} onClick={togglePopup}/>
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
