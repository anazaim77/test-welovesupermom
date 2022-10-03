import { textUtils } from "../index";

describe("Text Util", () => {
  it("should be ok", () => {
    expect(true).toBeTruthy();
  });

  it("should be transform to alternate Upper and Lower Case", () => {
    const expectedResult = "hElLo wOrLd";
    const testCustomCase = textUtils.toAlternateUpperAndLower("Hello world");

    expect(testCustomCase).toBe(expectedResult);
  });
});
