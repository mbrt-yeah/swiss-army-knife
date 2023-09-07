/// <reference types="node" />

import { join } from "node:path";
import { Stats, readdirSync, statSync } from "node:fs";

export function* traverseDir(dirPath: string): Generator<Stats> {
    const contents = readdirSync(dirPath, {
        withFileTypes: true
    });

    for (const content of contents) {
        const contentPath = join(dirPath, content.name);
        const contentStats = statSync(contentPath);

        yield contentStats;

        if (content.isDirectory())
            yield* traverseDir(contentPath);
    }
};
