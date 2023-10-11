import { Err, Ok, Result } from "ts-results-es";
import { IRecord } from "@swiss-army-knife/models";
import { Options, parse } from "csv-parse";
import { parse as parseSync } from "csv-parse/sync";

import { ICsvParser } from "./i-csv-parser.js";
import { ICsvParserParameters } from "./i-csv-parser-parameters.js";

export class CsvParser implements ICsvParser {
    public data: string;
    public options: Options;

    public constructor(parameters: ICsvParserParameters = {
        data: "",
        options: {},
    }) {
        this.data = parameters.data;
        this.options = Object.assign({
            columns: true,
            delimiter: ",",
            skip_empty_lines: true,
        }, parameters.options)
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
        let data: IRecord[] = [];
        let error: Error | undefined = undefined;

        try {
            data = parseSync(this.data, this.options);
        } catch(caughtError: unknown) {
            if (caughtError instanceof Error)
                error = caughtError as Error;
            else
                error = new Error("An error occurred");
        }

        if (error)
            return new Err(error);

        return new Ok(data);
    }
};
