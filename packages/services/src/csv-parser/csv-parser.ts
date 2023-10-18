import { Err, Ok, Result } from "ts-results-es";
import { IRecord } from "@swiss-army-knife/models";
import { Options, parse } from "csv-parse";
import { parse as parseSync } from "csv-parse/sync";
import { tryCatch } from "@swiss-army-knife/utilities";

import { ICsvParser } from "./i-csv-parser.js";

export class CsvParser implements ICsvParser {
    private __data: string;
    private __options: Options;

    public constructor(data: string, options: Options) {
        this.__data = data;
        this.__options = Object.assign({
            columns: true,
            delimiter: ",",
            skip_empty_lines: true,
        }, options);
    }

    public get data(): string {
        return this.__data;
    }

    public get options(): Options {
        return this.__options;
    }

    public async execute(): Promise<Result<IRecord[], Error>> {
        return new Promise((resolve) => {
            parse(this.data, this.options, (error, data) => {
                if (error)
                    return resolve(new Err(error));

                return resolve(new Ok(data));
            });
        });
    }

    public executeSync(): Result<IRecord[], Error> {
        return tryCatch(() => {
            return parseSync(this.__data, this.__options);
        });
    }
};
