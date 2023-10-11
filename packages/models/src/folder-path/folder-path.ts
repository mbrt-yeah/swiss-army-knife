import { APath } from "../path/a-path.js";

export class FolderPath extends APath {
    public constructor(serializedPath: string = "") {
        super(serializedPath);
    }
};
