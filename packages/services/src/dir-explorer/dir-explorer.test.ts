import { describe, expect, it } from "@jest/globals";
import { File } from "@swiss-army-knife/models";
import { resolve } from "node:path";

import { DirExplorer } from "../dir-explorer/dir-explorer.js";

const dirPath = resolve(__dirname, "../../.tests")

describe("DirExplorer", () => {
    describe("listFiles", () => {
        it("without any filter it should list all files in folder and subfolders", async () => {
            const dirExplorer = new DirExplorer({ dirPath, });
            const executeResult = dirExplorer.listFiles();
            const files = executeResult.unwrap();
            const jsonFiles = files.filter((file) => file.path.parsedValue.ext === ".json");
            const txtFiles = files.filter((file) => file.path.parsedValue.ext === ".txt");

            expect(executeResult.isErr()).toBe(false);
            expect(files).toBeInstanceOf(Array);
            expect(files.length).toBe(5);
            expect(jsonFiles.length).toBe(2);
            expect(txtFiles.length).toBe(3);
        });

        it("with a filter it should list particular files in folder and subfolders", async () => {
            const dirExplorer = new DirExplorer({ dirPath, });
            const executeResult = dirExplorer.listFiles((file: File<any>) => {
                return file.path.parsedValue.ext === ".json";
            });
            const files = executeResult.unwrap();

            expect(executeResult.isErr()).toBe(false);
            expect(files).toBeInstanceOf(Array);
            expect(files.length).toBe(2);

            for (const file of files)
                expect(file.path.parsedValue.ext).toEqual(".json");
        });

        it("with a filter for files not present in folder and subfolders, it should list no files at all", async () => {
            const dirExplorer = new DirExplorer({ dirPath, });
            const executeResult = dirExplorer.listFiles((file: File<any>) => {
                return file.path.parsedValue.ext === ".xml";
            });
            const files = executeResult.unwrap();

            expect(executeResult.isErr()).toBe(false);
            expect(files).toBeInstanceOf(Array);
            expect(files.length).toBe(0);
        });
    });
});