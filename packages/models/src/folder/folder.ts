/// <reference types="node" />

import { Stats } from "node:fs";

import { FolderPath } from "../folder-path/folder-path.js";
import { IFolder } from "./i-folder.js";
import { IFolderOptions } from "./i-folder-options.js";

export class Folder implements IFolder {
    public path: FolderPath;
    public root: IFolder | undefined;
    public stats: Stats | undefined;

    public constructor(options: IFolderOptions) {
        this.path = options.path || new FolderPath();
        this.root = options.root;
        this.stats = options.stats;
    }
};
