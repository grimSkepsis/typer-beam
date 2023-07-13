import { WritingSample, CreateWritingSampleInput } from "./type";

export async function CreateWritingSample(
  input: CreateWritingSampleInput
): Promise<WritingSample> {
  console.log("Submitting Sample:", input);
  return Promise.resolve({ id: "123", ...input });
}
