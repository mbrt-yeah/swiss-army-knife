import { IRecord } from "@swiss-army-knife/models";
import { Options } from "csv-stringify";

export interface ICsvSerializerParameters {
    data: IRecord[];
    options: Options;
};
