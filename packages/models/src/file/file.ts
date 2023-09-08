/// <reference types="node" />

import { Stats } from "node:fs";

import { FilePath } from "../file-path/file-path";
import { IFile } from "./i-file";
import { IFileOptions } from "./i-file-options";
import { IFolder } from "../folder/i-folder";
import { IPath } from "../path/i-path";

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
