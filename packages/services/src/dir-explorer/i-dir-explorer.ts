import { File, Folder } from "@swiss-army-knife/models";
import { Result } from "ts-results";

import { IDirExplorerProperties } from "./i-dir-explorer-properties";
import { ITraverseDirResult } from "@swiss-army-knife/utilities";

export interface IDirExplorer extends IDirExplorerProperties {
    listFiles(filter?: (result: ITraverseDirResult) => boolean): Result<File<any>[], Error>;
    listDirs(filter?: (result: ITraverseDirResult) => boolean): Result<Folder[], Error>;
};
