import gql from "graphql-tag";
import { mutation } from "../graphql";
import { WritingSample, CreateWritingSampleInput } from "./type";

export async function CreateWritingSample(
  input: CreateWritingSampleInput
): Promise<WritingSample> {
  return mutation(
    gql`
      mutation createWritingSample($input: CreateWritingSampleInput!) {
        createWritingSample(input: $input) {
          id
          title
          text
        }
      }
    `,
    { input }
  );
}
