export const API_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:1337`
    : `https://istrapi-heroku.herokuapp.com`;
export const CLIENT_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3000`
    : `https://igraphql.now.sh`;
