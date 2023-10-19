import { Result } from "ts-results-es";

import { IRepositoryOperationResult } from "./repository-operation-result/i-repository-operation-result.js";

export interface IRepository<T> {
    createMany(instances: T[]): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    createOne(instance: T): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    readAll(): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    readMany(instanceIds: (string | number)[]): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    readOne(instanceId: string | number): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    updateMany(instances: T[]): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    updateOne(instance: T): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    upsertMany(instances: T[]): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    upsertOne(instance: T): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    deleteAll(): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    deleteMany(instanceIds: (string | number)[]): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    deleteOne(instanceId: string | number): Promise<Result<IRepositoryOperationResult<T>, Error>>;
    countData(): Promise<Result<number, Error>>;
};
