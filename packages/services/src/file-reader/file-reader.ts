import { Err, Ok, Result } from "ts-results-es";
import { readFile, readFileSync } from "fs-extra";

import { IFileReader } from "./i-file-reader.js";
import { IFileReaderParameters } from "./i-file-reader-parameters.js";

export class FileReader implements IFileReader {
    public encoding: BufferEncoding;
    public path: string;

    public constructor(parameters: IFileReaderParameters = {
        encoding: "utf8",
        path: "",
    }) {
        this.encoding = parameters.encoding || "utf-8";
        this.path = parameters.path;
    }

    public execute(): Promise<Result<string, Error>> {
        return new Promise((resolve) => {
            readFile(this.path)
                .then((buffer: Buffer) => {
                    const fileContents = buffer.toString(this.encoding);
                    return resolve(new Ok(fileContents));
                })
                .catch((error: unknown) => {
                    return resolve(new Err(error as Error));
                });
        });
    }

    public executeSync(): Result<string, Error> {
        let result: string = "",
            error: Error | undefined = undefined;

        try {
            const buffer = readFileSync(this.path);
            result += buffer.toString(this.encoding);
        } catch(caughtError: unknown) {
            if (caughtError instanceof Error)
                error = caughtError as Error;
            else
                error = new Error("An error occurred");
        }

        if (error)
            return new Err(error);

        return new Ok(result);
    }
};
