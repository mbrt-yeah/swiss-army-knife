import { Err, Ok, Result } from "ts-results";
import { ICsvSerializer } from "./i-csv-serializer";
import { ICsvSerializerParameters } from "./i-csv-serializer-parameters";
import { IRecord } from "models/dist/i-record";
import { Options, stringify } from "csv-stringify";
import { stringify as csvStringifySync } from "csv-stringify/sync";

export class CsvSerializer implements ICsvSerializer {
    public data: IRecord[];
    public options: Options;

    public constructor(parameters: ICsvSerializerParameters = {
        data: [],
        options: {},
    }) {
        this.data = parameters.data;
        this.options = Object.assign({
            columns: true,
            delimiter: ",",
            skip_empty_lines: true,
        }, parameters.options)
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
        let dataSerialized: string = "",
            error: Error | undefined = undefined;

        try {
            dataSerialized = csvStringifySync(this.data, this.options);
        } catch(caughtError: unknown) {
            if (caughtError instanceof Error)
                error = caughtError as Error;
            else
                error = new Error("An error occurred");
        }

        if (error)
            return new Err(error);

        return new Ok(dataSerialized);
    }
};
