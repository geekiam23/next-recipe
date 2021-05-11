import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { getAuthHeaders } from './utils/auth'

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: new HttpLink({
      uri: 'http://localhost:3000/graphql',
      // headers: getAuthHeaders(),
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;