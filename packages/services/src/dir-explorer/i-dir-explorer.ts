import { File, Folder } from "@swiss-army-knife/models";
import { Result } from "ts-results-es";

import { IDirExplorerProperties } from "./i-dir-explorer-properties.js";

export interface IDirExplorer extends IDirExplorerProperties {
    listFiles(filterCallbackFn?: (result: File<any>) => boolean): Result<File<any>[], Error>;
    listDirs(filterCallbackFn?: (result: Folder) => boolean): Result<Folder[], Error>;
};
