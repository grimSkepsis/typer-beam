import { SampleManagementState } from "./sampleManagement/types";
import { TypeTesterState } from "./typeTester/types";

export type AppState = {
  typeTester: TypeTesterState;
  sampleManagement: SampleManagementState;
};
