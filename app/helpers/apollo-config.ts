import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import CONFIG from 'helpers/config';

const httpLink = new HttpLink({
    uri: CONFIG.HTTPS_API_URL
  });
  
  const wsLink = new WebSocketLink({
    uri: CONFIG.WS_API_URL,
    options: {
      reconnect: true
    }
  });
  
  const terminatingLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );
  
  const link = ApolloLink.from([terminatingLink]);
  
  const cache = new InMemoryCache();
  
  const client = new ApolloClient({
    link,
    cache,
  });
 
  export default client;