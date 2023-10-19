import { IExecutable, IRecord } from "@swiss-army-knife/models";
import { Options } from "csv-parse";

import { ICsvParserProperties } from "./i-csv-parser-properties.js";

export interface ICsvParser extends ICsvParserProperties, IExecutable<IRecord[]> {
    get data(): string;
    get options(): Options;
};
