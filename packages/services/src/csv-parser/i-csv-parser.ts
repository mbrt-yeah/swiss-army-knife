import { ICsvParserParameters } from "./i-csv-parser-parameters";
import { IExecutable, IRecord } from "@swiss-army-knife/models";

export interface ICsvParser extends ICsvParserParameters, IExecutable<IRecord[]> {};
