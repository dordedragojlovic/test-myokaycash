import { DeviceInfo } from 'types';
import API from 'helpers/api';
import { Observable } from 'apollo-link';

function addDevice(deviceInfo: DeviceInfo, username: string): Promise<{ certificateId: string; id: string; }> {
  return API.addDevice(deviceInfo, username);
}

const recentActivitydata = [
    {   
        id: 131,
        date: '20',
        item: 'Dribbble Pro',
        type: 'Subscription',
        price: '-$19.99',
        positive: false,
        time: '10:10PM'
    },
    {   
        id: 132,
        date: '18',
        item: 'Steam Credit',
        type: 'Bought Trails in the Sky SC',
        price: '-$8.09',
        positive: false,
        time: '12:12PM'
    },
    {   
        id: 133,
        date: '15',
        item: 'Apple Iphone SE',
        type: ' Space Gray 64GB',
        price: '-$1099.99',
        positive: false,
        time: '18:18PM'
    },
    {   
        id: 134,
        date: '02',
        item: 'PayPal Transfer',
        type: 'Sent for good will',
        price: '+$300.00',
        positive: true,
        time: '07:07AM'
    }
];

const tableData = {
    column: [ 'Type', 'Account', 'Recipient', 'Status', 'Currency', 'Balance'],
    row: [  [ 'Checking', '1234567***', 'SMITH', 'Active', 'EURO', '‎€6,234.56'],
            [ 'Savings', '5389215***', 'DOE', 'Active', 'EURO', '‎€16,234.56'],
            [ 'Savings', '3142367***', 'CARTER', 'Deactivated', 'EURO', '‎€56.23',]
         ]
}

const deviceData = {
    column: [ 'Type', 'ID', 'Linked', 'Status'],
    row: [  [ '1-Click device', 'JK25C7D8S4CC', 'True','Active'],
            [ 'Smart dash cam', 'LG35IF64FJS45', 'False','Deactivated']
         ]
}

const dataProvider = {
  addDevice,
  recentActivitydata,
  tableData,
  deviceData
};

export default dataProvider;
