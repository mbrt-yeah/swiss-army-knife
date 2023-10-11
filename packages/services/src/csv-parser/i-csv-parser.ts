import { IExecutable, IRecord } from "@swiss-army-knife/models";

import { ICsvParserParameters } from "./i-csv-parser-parameters.js";

export interface ICsvParser extends ICsvParserParameters, IExecutable<IRecord[]> {};
