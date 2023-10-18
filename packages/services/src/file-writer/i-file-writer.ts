import { IExecutable } from "@swiss-army-knife/models";

import { IFileWriterProperties } from "./i-file-writer-properties.js";

export interface IFileWriter extends IFileWriterProperties, IExecutable<void> {};
