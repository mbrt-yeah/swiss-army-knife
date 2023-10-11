import { IRecord } from "../i-record.js";

export interface IList<T> {
    get entries(): T[];

    addEntries(entry: T[]): number;
    addEntry(entry: T): number;
    findEntry(...searchCriteria: any[]): T | undefined;
    hasEntry(entry: T): boolean;
    merge(list: IList<T>): IList<T>;
    toRecord(): IRecord[];
    toString(): string;
};
