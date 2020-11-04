import { AuthInfo } from '../../types';
import API from '../../helpers/api';

async function authVoIP(values: AuthInfo): Promise<{ id: string; confirmed: boolean; }> {
  return await API.VoIPVerify(values);
}


const dataProvider = {
    authVoIP
};

export default dataProvider;
