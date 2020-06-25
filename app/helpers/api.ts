import gql from 'graphql-tag';

async function createUser(
  values,
  client
): Promise<{ code: string; qrCode: string;  cardInfo: { number: string; cvc: string; validity: string} }> {
  return (
    await client.mutate({
      mutation: gql`
        mutation signUp ($input: UserLogin! ){
          signUp(input: $input){
            code
            qrCode
            cardInfo{
              number
              cvc
              validity
            }
          }
        }
      `,
      variables: {
        input: {
          username: values.username,
          password: values.password
        }
      },
    })
  ).data.signUp;
}

async function login(
  values,
  client
): Promise<{ code: string; }> {
  return (
    await client.mutate({
      mutation: gql`
        mutation logIn ($input: UserLogin! ){
          logIn(input: $input){
            code
          }
        }
      `,
      variables: {
        input: {
          username: values.username,
          password: values.password
        }
      },
    })
  ).data.logIn;
}


const API = {
  createUser,
  login
};

export default API;