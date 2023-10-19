import { IRepositoryOperationResultProperties } from "./i-repository-operation-result-properties.js";

export interface IRepositoryOperationResult<T> extends IRepositoryOperationResultProperties {
    get data(): T[];
    get totalData(): number;
};
