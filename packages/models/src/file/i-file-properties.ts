/// <reference types="node" />

import { Stats } from "node:fs";

import { FilePath } from "../file-path/file-path.js";
import { IFolder } from "../folder/i-folder.js";

export interface IFileProperties<T> {
    data: T | undefined;
    path: FilePath;
    root: IFolder | undefined;
    stats: Stats | undefined;
};
