import { describe, expect, it } from "vitest";
import { Util } from "../util";

describe("dfs folder", () => {
  it("should get all files from fold", () => {
    const files = Util.dfsFolder("d:\\zcy\\projects\\othes\\parse-sfc\\src");
    console.log(files);
    expect(files.length).toBeGreaterThan(0);
  });
});
