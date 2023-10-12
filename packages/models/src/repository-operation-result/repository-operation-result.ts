import { IRepositoryOperationResult } from "./i-repository-operation-result.js";
import { IRepositoryOperationResultOptions } from "./i-repository-operation-result-options.js";

export class RepositoryOperationResult<T> implements IRepositoryOperationResult<T> {
    private __data: T[];
    private __totalData: number;

    public constructor(options: IRepositoryOperationResultOptions<T>) {
        this.__data = options.data || [];
        this.__totalData = options.totalData || 0;
    }

    get data(): T[] {
        return this.__data;
    }

    get totalData(): number {
        return this.__totalData;
    }
};
