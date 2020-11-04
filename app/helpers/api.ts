import gql from 'graphql-tag';
import * as ws from 'ws';
import { WebSocketLink } from 'apollo-link-ws';
import { Observable } from 'apollo-link';
import { DocumentNode, execute } from 'apollo-link';
import ApolloClient from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import CONFIG from './config';

const client = new ApolloClient({
  link: createHttpLink({ uri: CONFIG.HTTPS_API_URL, fetch }),
  cache: new InMemoryCache(),
});
const wsClient = new SubscriptionClient(CONFIG.WS_API_URL, { reconnect: true }, WebSocket);

const createSubscriptionObservable = (query: DocumentNode, variables: Record<string, unknown> = {}) => {
  const link = new WebSocketLink(wsClient);
  return execute(link, { query: query, variables: variables });
};

async function createUser(
  values
): Promise<{ code: string; qrCode: string;  cardInfo: { number: string; cvc: string; validity: string} }> {
  return (
    await client.mutate({
      mutation: gql`
        mutation account ($input: UserLogin! ){
          account{
            create(input: $input){
              code
              qrCode
              cardInfo{
                number
                cvc
                validity
              }
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
  ).data.account.create;
}

async function updateUser(
  values
): Promise<{ cardInfo: { number: string; cvc: string; validity: string}; balance: string; currency: string; phoneNumber: string; }> {
  return (
    await client.mutate({
      mutation: gql`
      mutation account ($input: UpdateAccountInput! ){
        account{
          update(input: $input){
            cardInfo{
              number
              cvc
              validity
            }
            balance
            currency
            phoneNumber
          }
        }
      }
      `,
      variables: {
        input: {
          username: values.username,
          phoneNumber: values.phoneNumber
        }
      },
    })
  ).data.account.update;
}

async function getUser(
  values
): Promise<{ cardInfo: { number: string; cvc: string; validity: string}; username: string; balance: number; phoneNumber: string; }> {
  return (
    await client.query({
      query: gql`
        query account ($username: String! ){
          account(username: $username){
            cardInfo{
              number
              cvc
              validity
            }
            username
            balance
            phoneNumber
          }
        }
      `,
      variables: {
          username: values
      },
    })
  ).data.account;
}

async function login(
  values
): Promise<{ code: string; }> {
  return (
    await client.mutate({
      mutation: gql`
      mutation account ($input: UserLogin! ){
        account{
          logIn(input: $input){
            code
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
  ).data.account.logIn;
}

async function VoIPVerify(
  values
): Promise<{ id: string; confirmed: boolean; }> {
  return (
    await client.mutate({
      mutation: gql`
        mutation payment ($input: VerifyTransactionInput! ){
          payment{
            verify(input: $input){
              id
              confirmed
            }
          }
        }
      `,
      variables: {
        input: {
          code: values.code
        }
      },
    })
  ).data.payment.verify;
}

async function cleareDB(): Promise<{ reset: boolean }> {
  return (
    await client.mutate({
      mutation: gql`
      mutation RESET {
        reset
      }
      `,
      variables: { },
    })
  ).data.reset;
}

function getLinkingObservable(name: string): Observable<boolean> {
  const fetchResultObservable = createSubscriptionObservable(
    gql`
      subscription($username: String!) {
        userLinked(username: $username)
      }
    `,
    { username: name }
  );
  return Observable.from(fetchResultObservable).map((value) => value.data?.userLinked);
}

function getValidityObservable(name: string): Observable<boolean> {
  const fetchResultObservable = createSubscriptionObservable(
    gql`
      subscription($username: String!) {
        userLoginConfirmSuccessful(username: $username)
      }
    `,
    { username: name }
  );
  return Observable.from(fetchResultObservable).map((value) => value.data?.userLoginConfirmSuccessful);
}

const API = {
  createUser,
  updateUser,
  login,
  VoIPVerify,
  getLinkingObservable,
  getValidityObservable,
  cleareDB,
  getUser
};

export default API;