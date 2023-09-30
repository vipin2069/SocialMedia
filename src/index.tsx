import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import ReactDOM from 'react-dom';
import App from './App';

const httpLink = createHttpLink({
  uri: 'YOUR_GRAPHQL_ENDPOINT',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
