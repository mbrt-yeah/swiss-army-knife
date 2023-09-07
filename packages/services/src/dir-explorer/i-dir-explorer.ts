import { IDirExplorerProperties } from "./i-dir-explorer-properties";

export interface IDirExplorer extends IDirExplorerProperties {
    listFiles(includeSubDirs?: boolean, filter?: () => any): any[];
    listDirs(includeSubDirs?: boolean, filter?: () => any): any[];
};
