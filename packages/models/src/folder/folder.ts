/// <reference types="node" />

import { Stats } from "node:fs";

import { FolderPath } from "../folder-path/folder-path";
import { IFolder } from "./i-folder";
import { IFolderOptions } from "./i-folder-options";
import { IPath } from "../path/i-path";

export abstract class Folder implements IFolder {
    public path: IPath;
    public root?: IFolder;
    public stats?: Stats;

    public constructor(options: IFolderOptions) {
        this.path = options.path || new FolderPath();
        this.root = options.root;
        this.stats = options.stats;
    }
};