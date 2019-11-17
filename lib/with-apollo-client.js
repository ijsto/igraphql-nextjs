import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { API_URL } from "../config";

function createClient({ headers }) {
  return new ApolloClient({
    uri: API_URL,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}

export default withApollo(createClient);
