import { ensureFile, ensureFileSync, outputFile, outputFileSync } from "fs-extra";
import { Err, Ok, Result } from "ts-results-es";

import { IFileWriter } from "./i-file-writer.js";
import { IFileWriterParameters } from "./i-file-writer-parameters.js";

export class FileWriter implements IFileWriter {
    public path: string;
    public data: string;

    public constructor(parameters: IFileWriterParameters = {
        path: "",
        data: ""
    }) {
        this.path = parameters.path;
        this.data = parameters.data;
    }

    public execute(): Promise<Result<void, Error>> {
        return new Promise((resolve) => {
            ensureFile(this.path)
                .then(() => {
                    return outputFile(this.path, this.data);
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
        let error: Error | undefined = undefined;

        try {
            ensureFileSync(this.path);
            outputFileSync(this.path, this.data);
        } catch(caughtError: unknown) {
            if (caughtError instanceof Error)
                error = caughtError as Error;
            else
                error = new Error("An error occurred");
        }

        if (error)
            return new Err(error);

        return new Ok(undefined);
    }
};
