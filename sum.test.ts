import sum from "./sum";
import { expect, it, describe } from "vitest";

describe("sum", () => {
  it("returns 0 with no argument", () => {
    expect(sum()).toBe(0);
  });

  it("returns same number with one number", () => {
    expect(sum(2)).toBe(2);
  });
});
