import { resolve } from "node:path";
import { describe, expect, it } from "@jest/globals";

import { DirExplorer } from "../dir-explorer/dir-explorer";

const dirPath = resolve(__dirname, "../.tests")

describe("DirExplorer", () => {
    describe("listFiles", () => {
        it("should list alles files in folder and subfolders", async () => {
            const dirExplorer = new DirExplorer({ dirPath, });
            const executeResult = dirExplorer.listFiles();
            const files = executeResult.unwrap();

            expect(executeResult.err).toBe(false);
            expect(files).toBeInstanceOf(Array);
            //expect(files.length).toBe(3);
        });
    });
});