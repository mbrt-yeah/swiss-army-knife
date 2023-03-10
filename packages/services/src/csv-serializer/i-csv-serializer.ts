import { ICsvSerializerParameters } from "./i-csv-serializer-parameters";
import { IExecutable } from "@swiss-army-knife/models";

export interface ICsvSerializer extends ICsvSerializerParameters, IExecutable<string> {};
