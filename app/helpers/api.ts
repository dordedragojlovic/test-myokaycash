import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import CONFIG from './config';

const client = new ApolloClient({
  link: createHttpLink({ uri: CONFIG.HTTPS_API_URL, fetch }),
  cache: new InMemoryCache(),
});

async function createUser(
  values
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
  values
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