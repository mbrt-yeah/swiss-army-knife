import { Err, Result } from "ts-results-es";
import { File, FilePath, Folder, FolderPath } from "@swiss-army-knife/models";
import { ITraverseDirResult, traverseDir } from "@swiss-army-knife/utilities";
import { tryCatch } from "@swiss-army-knife/utilities";

import { IDirExplorer } from "./i-dir-explorer.js";

export class DirExplorer implements IDirExplorer {
    private __dirPath: string;

    public constructor(dirPath: string) {
        this.__dirPath = dirPath;
    }

    public listFiles(filterCallbackFn?: (result: File<any>) => boolean): Result<File<any>[], Error> {
        if (!this.__dirPath)
            return new Err(new Error("Path to directory is empty, null or undefined"));

        return tryCatch(() => {
            let files: File<any>[] = [];

            for (const result of traverseDir(this.__dirPath)) {
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

            return files;
        });
    }

    public listDirs(filterCallbackFn?: (result: Folder) => boolean): Result<Folder[], Error> {
        if (!this.__dirPath)
            return new Err(new Error("Path to directory is empty, null or undefined"));

        return tryCatch(() => {
            let folders: Folder[] = [];

            for (const result of traverseDir(this.__dirPath)) {
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

            return folders;
        });
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
