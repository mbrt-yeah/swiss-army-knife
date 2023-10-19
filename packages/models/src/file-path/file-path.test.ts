import {describe, expect, it } from "@jest/globals";
import { FilePath } from "./file-path.js";

describe("FilePath", () => {
    describe("#constructor", () => {
        it("should create a FilePath instance when given a valid file path", async () => {
            const filePathSerialized = "C:\\folder-1\\folder-1_file-1.txt";
            const filePath = new FilePath(filePathSerialized);

            expect(filePath.serializedValue).not.toBeUndefined();
            expect(filePath.serializedValue).toEqual(filePathSerialized);
            expect(filePath.parsedValue).not.toBeUndefined();
            expect(filePath.parsedValue.base).toEqual("folder-1_file-1.txt");
            expect(filePath.parsedValue.dir).toEqual("C:\\folder-1");
            expect(filePath.parsedValue.ext).toEqual(".txt");
            expect(filePath.parsedValue.name).toEqual("folder-1_file-1");
            expect(filePath.parsedValue.root).toEqual("C:\\");
        });
    });
});