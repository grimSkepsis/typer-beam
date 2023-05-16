import { gradeUserString } from "../../src/util/string";

describe("gradeUserString", () => {
  it("grades the user string correctly", () => {
    const string = "The quick brown fox jumps over the lazy dog.";
    const userString = "The slow brown fox jumps over the cat.";

    const gradedString = gradeUserString(string, userString);

    expect(gradedString.correct).toEqual("The ");
    expect(gradedString.mistake).toEqual("quick brown fox jumps over the laz");
    expect(gradedString.remaining).toEqual("y dog.");
  });
});
