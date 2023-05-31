import { DocumentNode, print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";

async function query(
  query: DocumentNode,
  args: Record<string, any>,
  cookie?: string
) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (cookie) {
    headers.Cookie = cookie;
  }

  const response = await axios.post(
    "/api/graphql",
    {
      //   query: query.loc?.source.body,
      query: print(query),
      variables: args,
    },
    {
      headers,
    }
  );

  const { data, errors } = response.data;

  if (errors) {
    throw new Error(errors[0].message);
  }

  return data;
}

const GET_USER = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      id
      name
    }
  }
`;

export async function getUser(id: string, cookie?: string) {
  const result = await query(GET_USER, { id }, cookie);
  return result.getUser;
}
