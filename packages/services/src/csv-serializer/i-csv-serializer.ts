import { IExecutable } from "@swiss-army-knife/models";

import { ICsvSerializerParameters } from "./i-csv-serializer-parameters.js";

export interface ICsvSerializer extends ICsvSerializerParameters, IExecutable<string> {};
