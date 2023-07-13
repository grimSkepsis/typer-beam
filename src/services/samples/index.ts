import gql from "graphql-tag";
import { mutation } from "../graphql";
import { WritingSample, CreateWritingSampleInput } from "./type";

export async function CreateWritingSample(
  input: CreateWritingSampleInput
): Promise<WritingSample> {
  console.log("Submitting Sample:", input);

  return mutation(
    gql`
      mutation CreateWritingSample($input: CreateWritingSampleInput!) {
        CreateWritingSample(input: $input) {
          id
          title
          text
        }
      }
    `,
    input
  );
  //   return Promise.resolve({ id: "123", ...input });
}
