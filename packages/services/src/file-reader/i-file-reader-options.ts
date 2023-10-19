import { Folder } from "@swiss-army-knife/models";
import { Stats } from "node:fs";

import { IFileReaderProperties } from "./i-file-reader-properties.js";

export interface IFileReaderOptions extends Partial<IFileReaderProperties> {
    encoding?: BufferEncoding | undefined;
    loadContents?: boolean | undefined;
    rootFolder?: Folder | undefined;
    stats?: Stats | undefined;
};
