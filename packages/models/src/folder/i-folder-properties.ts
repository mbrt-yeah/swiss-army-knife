/// <reference types="node" />

import { FolderPath } from "../folder-path/folder-path.js";
import { IFolder } from "./i-folder.js";
import { Stats } from "node:fs";

export interface IFolderProperties {
    path: FolderPath;
    root: IFolder | undefined;
    stats: Stats | undefined;
};
