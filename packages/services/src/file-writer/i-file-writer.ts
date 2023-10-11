import { IExecutable } from "@swiss-army-knife/models";

import { IFileWriterParameters } from "./i-file-writer-parameters.js";

export interface IFileWriter extends IFileWriterParameters, IExecutable<void> {};
