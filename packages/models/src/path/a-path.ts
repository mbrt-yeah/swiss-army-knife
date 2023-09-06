import { IPath } from "./i-path";
import { ParsedPath } from "parse-path";
import { resolve as resolvePath } from "node:path";
import parsePath from "parse-path";

export abstract class APath implements IPath {
    public parsedValue: ParsedPath;
    public serializedValue: string;

    public constructor(serializedPath: string) {
        this.serializedValue = resolvePath(serializedPath);
        this.parsedValue = parsePath(serializedPath);
    }
};
