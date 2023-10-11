/// <reference types="node" />

import { Err, Ok, Result } from "ts-results-es";
import { File, FilePath, Folder, FolderPath } from "@swiss-army-knife/models";
import { ITraverseDirResult, traverseDir } from "@swiss-army-knife/utilities";

import { IDirExplorer } from "./i-dir-explorer.js";
import { IDirExplorerOptions } from "./i-dir-explorer-options.js";

export class DirExplorer implements IDirExplorer {
    public dirPath: string;

    public constructor(options: IDirExplorerOptions) {
        this.dirPath = options.dirPath || "";
    }

    public listFiles(filterCallbackFn?: (result: File<any>) => boolean): Result<File<any>[], Error> {
        if (!this.dirPath)
            return new Err(new Error("Path to directory is empty, null or undefined"));

        let error: Error | undefined = undefined;
        let files: File<any>[] = [];

        try
        {
            for (const result of traverseDir(this.dirPath)) {
                if (!result.stats.isFile())
                    continue;

                const file = new File<any>({
                    path: new FilePath(result.path),
                    root: this.__createRootFolder(result.rootDir), 
                    stats: result.stats,
                });

                files.push(file);
            }

            if (filterCallbackFn && typeof filterCallbackFn === "function")
                files = files.filter((file) => filterCallbackFn(file));
        }
        catch(errorThrown: unknown) {
            error = (errorThrown instanceof Error) ? errorThrown : new Error("Unknown error");
        }

        if (error)
            return new Err(error);

        return new Ok(files);
    }

    public listDirs(filterCallbackFn?: (result: Folder) => boolean): Result<Folder[], Error> {
        if (!this.dirPath)
            return new Err(new Error("Path to directory is empty, null or undefined"));

        let error: Error | undefined = undefined;
        let folders: Folder[] = [];

        //try
        //{
            for (const result of traverseDir(this.dirPath)) {
                if (!result.stats.isDirectory())
                    continue;

                const folder = new Folder({
                    path: new FolderPath(result.path),
                    root: this.__createRootFolder(result.rootDir), 
                    stats: result.stats,
                });

                folders.push(folder);
            }

            if (filterCallbackFn && typeof filterCallbackFn === "function")
                folders = folders.filter((file) => filterCallbackFn(file));
        //} 
        //catch(error: unknown) 
        //{
        //    console.log(error);
        //    error = (error instanceof Error) ? error : new Error("Unknown error");
        //}

        //if (error)
        //    return new Err(error);

        return new Ok(folders);
    }

    private __createRootFolder(rootFolder?: ITraverseDirResult): Folder | undefined {
        if (!rootFolder)
            return undefined;

        return new Folder({
            path: new FolderPath(rootFolder.path),
            stats: rootFolder.stats,
        });
    }
};
