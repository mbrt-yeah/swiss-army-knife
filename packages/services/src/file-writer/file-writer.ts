import { ensureFile, ensureFileSync, outputFile, outputFileSync } from "fs-extra";
import { Err, Ok, Result } from "ts-results-es";
import { tryCatch } from "@swiss-army-knife/utilities";

import { IFileWriter } from "./i-file-writer.js";
import { IFileWriterOptions } from "./i-file-writer-options.js";

export class FileWriter implements IFileWriter {
    private __fileContents: string;
    private __filePath: string;

    public encoding: BufferEncoding;

    public constructor(filePath: string, fileContents: string, options: IFileWriterOptions = {}) {
        this.__fileContents = fileContents;
        this.__filePath = filePath;
        this.encoding = options.encoding || "utf8";
    }

    public execute(): Promise<Result<void, Error>> {
        return new Promise((resolve) => {
            ensureFile(this.__filePath)
                .then(() => {
                    return outputFile(this.__filePath, this.__fileContents, {
                        encoding: this.encoding
                    });
                })
                .then(() => {
                    return resolve(new Ok(undefined));
                })
                .catch((error: unknown) => {
                    return resolve(new Err(error as Error));
                });
        });
    }

    public executeSync(): Result<void, Error> {
        return tryCatch(() => {
            ensureFileSync(this.__filePath);
            outputFileSync(this.__filePath, this.__fileContents, {
                encoding: this.encoding
            });
        });
    }
};
