import gql from "graphql-tag";
import { mutation } from "../graphql";
import { PerformanceInput } from "./type";

export function RecordUserPerformance(
  input: PerformanceInput
): Promise<boolean> {
  return mutation(
    gql`
      mutation RecordUserPerformance($input: PerformanceInput!) {
        recordUserPerformance(input: $input)
      }
    `,
    { input }
  ).then((res) => res.recordUserPerformance);
}
