import { APath } from '../path/a-path.js';

export class FilePath extends APath {
    public constructor(serializedPath: string = "") {
        super(serializedPath);
    }
};