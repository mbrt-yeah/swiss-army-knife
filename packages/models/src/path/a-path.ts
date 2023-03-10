import { IPath } from "./i-path";
import { ParsedPath } from "parse-path";
import { resolve as resolvePath } from "node:path";
import parsePath from "parse-path";

export abstract class APath implements IPath {
    public parsed: ParsedPath;
    public value: string;

    public constructor(serializedPath: string) {
        this.value = resolvePath(serializedPath);
        this.parsed = parsePath(serializedPath);
    }
};
