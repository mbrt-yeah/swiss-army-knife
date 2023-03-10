import { FilePath } from "../path/file-path";

export interface IFileParameters<T> {
    data: T;
    path: FilePath;
};
