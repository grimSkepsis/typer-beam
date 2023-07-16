import { DocumentNode, print } from "graphql";
import gql from "graphql-tag";
import axios from "axios";
import { getApiRoutes } from "@/util/routes";

async function query(
  query: DocumentNode,
  args: Record<string, any>,
  cookie?: string
) {
  const response = await axios.post(
    getApiRoutes().graphql,
    {
      query: print(query),
      variables: args,
    },
    {
      headers: { cookie },
    }
  );

  const { data, errors } = response.data;

  if (errors) {
    throw new Error(errors[0].message);
  }

  return data;
}

export async function mutation(
  mutation: DocumentNode,
  args: Record<string, any>,
  cookie?: string
) {
  const response = await axios.post(
    getApiRoutes().graphql,
    {
      mutation: print(mutation),
      variables: args,
    },
    {
      headers: { cookie },
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
