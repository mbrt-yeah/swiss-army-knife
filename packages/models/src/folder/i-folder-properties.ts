/// <reference types="node" />

import { FilePath } from "../file-path/file-path.js";
import { IFolder } from "./i-folder.js";
import { Stats } from "node:fs";

export interface IFolderProperties {
    path: FilePath;
    root: IFolder | undefined;
    stats: Stats | undefined;
};
