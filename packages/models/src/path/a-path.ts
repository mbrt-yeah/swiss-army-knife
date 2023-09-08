/// <reference types="node" />

import { IPath } from "./i-path";
import { resolve, parse, ParsedPath } from "node:path";

export abstract class APath implements IPath {
    public parsedValue: ParsedPath;
    public serializedValue: string;

    public constructor(serializedPath: string) {
        this.serializedValue = resolve(serializedPath);
        this.parsedValue = parse(serializedPath);
    }
};
