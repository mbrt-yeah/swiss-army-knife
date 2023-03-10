import { IExecutable } from "@swiss-army-knife/models";
import { IFileWriterParameters } from "./i-file-writer-parameters";

export interface IFileWriter extends IFileWriterParameters, IExecutable<void> {};
