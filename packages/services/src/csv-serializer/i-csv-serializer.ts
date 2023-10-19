import { IExecutable } from "@swiss-army-knife/models";
import { IRecord } from "@swiss-army-knife/models";
import { Options } from "csv-stringify";

import { ICsvSerializerProperties } from "./i-csv-serializer-properties.js";

export interface ICsvSerializer extends ICsvSerializerProperties, IExecutable<string> {
    get data(): IRecord[];
    get options(): Options;
};
