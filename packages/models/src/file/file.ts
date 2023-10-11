/// <reference types="node" />

import { Stats } from "node:fs";

import { FilePath } from "../file-path/file-path.js";
import { IFile } from "./i-file.js";
import { IFileOptions } from "./i-file-options.js";
import { IFolder } from "../folder/i-folder.js";
import { IPath } from "../path/i-path.js";

export class File<T> implements IFile<T> {
    public data: T | undefined;
    public path: IPath;
    public root: IFolder | undefined;
    public stats: Stats | undefined;

    public constructor(options: IFileOptions<T> = {}) {
        this.data = options.data
        this.path = options.path || new FilePath();
        this.root = options.root;
        this.stats = options.stats;
    }
};
