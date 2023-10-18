import { Err, Ok, Result } from "ts-results-es";
import { readFile, readFileSync } from "node:fs";
import { tryCatch } from "@swiss-army-knife/utilities";

import { IFileContentReaderOptions } from "./i-file-content-reader-options.js";
import { IFileContentReader } from "./i-file-content-reader.js";

export class FileContentReader implements IFileContentReader {
    private __filePath: string;
    public encoding: BufferEncoding;

    public constructor(filePath: string, options: IFileContentReaderOptions = {}) {
        this.encoding = options.encoding || "utf8";
        this.__filePath = filePath;
    }

    public execute(): Promise<Result<string, Error>> {
        return new Promise((resolve) => {
            readFile(this.__filePath, (err, buffer) => {
                if (err)
                    return resolve(new Err(err));

                const tryCatchResult = tryCatch(() => buffer.toString(this.encoding));

                if (tryCatchResult.isErr())
                    return resolve(tryCatchResult);

                return resolve(new Ok(tryCatchResult.unwrap()));
            });
        });
    }

    public executeSync(): Result<string, Error> {
        return tryCatch(() => {
            return readFileSync(this.__filePath).toString(this.encoding);
        });
    }
};
