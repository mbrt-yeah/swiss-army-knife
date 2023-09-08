import { File, Folder } from "@swiss-army-knife/models";
import { Result } from "ts-results";

import { IDirExplorerProperties } from "./i-dir-explorer-properties";

export interface IDirExplorer extends IDirExplorerProperties {
    listFiles(filterCallbackFn?: (result: File<any>) => boolean): Result<File<any>[], Error>;
    listDirs(filterCallbackFn?: (result: Folder) => boolean): Result<Folder[], Error>;
};
