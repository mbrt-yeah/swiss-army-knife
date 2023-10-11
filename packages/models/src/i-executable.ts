import { Result } from "ts-results-es";

export interface IExecutable<T> {
    execute(...args: any[]): Promise<Result<T,Error>>;
    executeSync(...args: any[]): Result<T, Error>;
};
