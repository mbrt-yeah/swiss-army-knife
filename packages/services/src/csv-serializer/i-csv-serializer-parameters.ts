import { IRecord } from "models/dist/i-record";
import { Options } from "csv-stringify";

export interface ICsvSerializerParameters {
    data: IRecord[];
    options: Options;
};
