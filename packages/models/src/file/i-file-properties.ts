/// <reference types="node" />

import { Stats } from "node:fs";

import { FilePath } from "../file-path/file-path";
import { IFolder } from "../folder/i-folder";

export interface IFileProperties<T> {
    data?: T;
    path: FilePath;
    root?: IFolder;
    stats?: Stats;
};
