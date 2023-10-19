import { IRepositoryOperationResultProperties } from "./i-repository-operation-result-properties.js";

export interface IRepositoryOperationResultOptions<T> extends IRepositoryOperationResultProperties {
    data?: T[] | undefined;
    totalData?: number | undefined;
};
