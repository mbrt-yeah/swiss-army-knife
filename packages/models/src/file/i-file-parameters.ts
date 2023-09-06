import { FilePath } from "../file-path/file-path";

export interface IFileParameters<T> {
    data: T;
    path: FilePath;
};
