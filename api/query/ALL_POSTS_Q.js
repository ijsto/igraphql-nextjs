import gql from "graphql-tag";

export const ALL_POSTS_Q = gql`
  query ALL_POSTS_Q {
    posts {
      id
      title
      body
    }
  }
`;

export default ALL_POSTS_Q;
