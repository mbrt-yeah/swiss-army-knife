import { Err, Ok, Result } from "ts-results-es";
import { IRecord } from "@swiss-army-knife/models";
import { Options, stringify } from "csv-stringify";
import { stringify as csvStringifySync } from "csv-stringify/sync";
import { tryCatch } from "@swiss-army-knife/utilities";

import { ICsvSerializer } from "./i-csv-serializer.js";

export class CsvSerializer implements ICsvSerializer {
    private __data: IRecord[];
    private __options: Options;

    public constructor(data: IRecord[], options: Options) {
        this.__data = data;
        this.__options = Object.assign({
            columns: true,
            delimiter: ",",
            skip_empty_lines: true,
        }, options);
    }

    public get data(): IRecord[] {
        return this.__data;
    }

    public get options(): Options {
        return this.__options;
    }

    public async execute(): Promise<Result<string, Error>> {
        return new Promise((resolve) => {
            stringify(this.data, this.options, (error, dataSerialized) => {
                if (error)
                    return resolve(new Err(error));

                return resolve(new Ok(dataSerialized));
            });
        });
    }

    public executeSync(): Result<string, Error> {
        return tryCatch(() => {
            return csvStringifySync(this.data, this.options);
        });
    }
};
