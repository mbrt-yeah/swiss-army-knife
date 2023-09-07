import { resolve } from "path";

import { describe, expect, it } from "@jest/globals";
import { ITraverseDirResult, traverseDir } from "./traverse-dir";

describe("traverseDir", () => {
    it("should traverse directory successfully", async () => {
        const elements: ITraverseDirResult[] = [];

        for (const element of traverseDir(resolve(__dirname, "../.tests")))
            elements.push(element);

        const folders = elements.filter((element) => element.stats.isDirectory());
        const files = elements.filter((element) => element.stats.isFile());

        expect(folders.length).toBe(3);
        expect(files.length).toBe(3);
    })
});