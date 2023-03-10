import { FilePath } from "../path/file-path";
import { IFile } from "./i-file";
import { IFileParameters } from "./i-file-parameters";
import { IPath } from "../path/i-path";

export abstract class AFile<T> implements IFile<T> {
    public data: T;
    public path: IPath;

    public constructor(parameters: IFileParameters<T> = {
        data: undefined,
        path: new FilePath(""),
    }) {
        this.data = parameters.data;
        this.path = parameters.path;
    }
};
