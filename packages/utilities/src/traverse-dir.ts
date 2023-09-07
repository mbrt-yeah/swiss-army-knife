/// <reference types="node" />

import { join } from "node:path";
import { Stats, readdirSync, statSync } from "node:fs";

interface ITraverseDirResult {
    stats: Stats;
    path: string;
    rootPath?: string;
};

function* traverseDir(dirPath: string): Generator<ITraverseDirResult> {
    const contents = readdirSync(dirPath, {
        withFileTypes: true
    });

    for (const content of contents) {
        const contentPath = join(dirPath, content.name);
        const contentStats = statSync(contentPath);

        yield {
            path: contentPath,
            rootPath: dirPath,
            stats: contentStats
        };

        if (content.isDirectory())
            yield* traverseDir(contentPath);
    }
};

export { ITraverseDirResult, traverseDir };
