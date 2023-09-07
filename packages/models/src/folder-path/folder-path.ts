import { APath } from "../path/a-path";

export class FolderPath extends APath {
    public constructor(serializedPath: string = "") {
        super(serializedPath);
    }
};
