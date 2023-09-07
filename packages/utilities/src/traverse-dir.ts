/// <reference types="node" />

import { join } from "node:path";
import { Stats, readdirSync, statSync } from "node:fs";

interface ITraverseDirResult {
    stats: Stats;
    path: string;
    rootDir?: ITraverseDirResult;
};

function* traverseDir(dirPath: string): Generator<ITraverseDirResult> {
    const rootDir: ITraverseDirResult = {
        path: dirPath,
        stats: statSync(dirPath)
    };

    const dirContents = readdirSync(dirPath, {
        withFileTypes: true
    });

    for (const dirContent of dirContents) {
        const contentPath = join(dirPath, dirContent.name);

        yield {
            path: contentPath,
            rootDir,
            stats: statSync(contentPath)
        };

        if (dirContent.isDirectory())
            yield* traverseDir(contentPath);
    }
};

export { ITraverseDirResult, traverseDir };
