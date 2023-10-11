import { IExecutable } from "@swiss-army-knife/models";

import { IFileReaderParameters } from "./i-file-reader-parameters.js";

export interface IFileReader extends IFileReaderParameters, IExecutable<string> {};
