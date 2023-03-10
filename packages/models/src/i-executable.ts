import { Result } from "ts-results";

export interface IExecutable<T> {
    execute(...args: any[]): Promise<Result<T,Error>>;
    executeSync(...args: any[]): Result<T, Error>;
};
