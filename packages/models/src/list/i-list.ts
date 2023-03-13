export interface IList<T> {
    get entries(): T[];

    addEntries(entry: T[]): number;
    addEntry(entry: T): number;
    hasEntry(entry: T): boolean;
    findEntry(...searchCriteria: any[]): T | undefined;
    merge(list: IList<T>): IList<T>;
};
