import gql from "graphql-tag";

export const ALL_BOOKS_Q = gql`
  query ALL_BOOKS_Q {
    books {
      id
      title
      summary
    }
  }
`;

export default ALL_BOOKS_Q;
