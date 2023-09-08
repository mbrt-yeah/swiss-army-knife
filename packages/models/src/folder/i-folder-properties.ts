/// <reference types="node" />

import { FilePath } from "../file-path/file-path";
import { IFolder } from "./i-folder";
import { Stats } from "node:fs";

export interface IFolderProperties {
    path: FilePath;
    root: IFolder | undefined;
    stats: Stats | undefined;
};
