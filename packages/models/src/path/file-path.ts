import { APath } from './a-path';

export class FilePath extends APath {
    public constructor(serializedPath: string) {
        super(serializedPath);
    }
};