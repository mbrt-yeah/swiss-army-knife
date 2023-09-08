import {describe, expect, it } from "@jest/globals";
import { FilePath } from "./file-path";

describe("FilePath", () => {
    describe("#constructor", () => {
        it("should create a FilePath instance when given a valid file path", async () => {
            const filePath = new FilePath("C:\\folder-1\\folder-1_file-1.txt");

            expect(filePath.serializedValue).toEqual(filePath);
        });
    });
});