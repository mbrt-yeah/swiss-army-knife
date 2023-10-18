import { IExecutable, IFile } from "@swiss-army-knife/models";
import { IFileReaderProperties } from "./i-file-reader-properties.js";

export interface IFileReader extends IFileReaderProperties, IExecutable<IFile<any>> {};
