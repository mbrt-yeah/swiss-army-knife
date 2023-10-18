import { IExecutable } from "@swiss-army-knife/models";
import { IFileContentReaderProperties } from "./i-file-content-reader-properties.js";

export interface IFileContentReader extends IFileContentReaderProperties, IExecutable<string> {};
