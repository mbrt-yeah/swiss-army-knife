/// <reference types="node" />

import { Err, Ok, Result } from "ts-results";
import { File, FilePath, Folder } from "@swiss-army-knife/models";
import { ITraverseDirResult, traverseDir } from "@swiss-army-knife/utilities";

import { IDirExplorer } from "./i-dir-explorer";
import { IDirExplorerOptions } from "./i-dir-explorer-options";

export class DirExplorer implements IDirExplorer {
    public dirPath: string;

    public constructor(options: IDirExplorerOptions) {
        this.dirPath = options.dirPath || "";
    }

    public listFiles(filter?: (result: ITraverseDirResult) => any): Result<File<any>[], Error> {
        if (!this.dirPath)
            return new Err(new Error("Path to directory is empty, null or undefined"));

        const files: File<any>[] = [];

        for (const result of traverseDir(this.dirPath)) {
            if (!result.stats.isFile())
                continue;

            const file = new File<any>({
                path: new FilePath(result.path),
                root: this.__createRootFolder(result.rootPath), 
                stats: result.stats,
            });

            files.push(file);
        }

        return new Ok(files);
    }

    public listDirs(filter?: (result: ITraverseDirResult) => any): Result<Folder[], Error> {
        if (!this.dirPath)
            return new Err(new Error("Path to directory is empty, null or undefined"));

        const folders: Folder[] = [];

        

        return new Ok(folders);
    }

    private __createRootFolder(path?: string): Folder | undefined {
        if (!path)
            return undefined;

        return new Folder({ path, })
    }
}