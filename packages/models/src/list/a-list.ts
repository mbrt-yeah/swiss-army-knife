import { arrayfy } from "@swiss-army-knife/utilities";
import { IList } from "./i-list";
import { IListParameters } from "./i-list-parameters";

export abstract class AList<T> implements IList<T> {
    private __entries: T[];

    public constructor(parameters: IListParameters<T> = {
        entries: [],
    }) {
        if (!parameters.entries)
            parameters.entries = [];

        this.__entries = (parameters.entries) ? arrayfy<T>(parameters.entries) : [];
    }

    public get entries(): T[] {
        return this.__entries;
    }

    public addEntry(entry: T): number {
        return this.__entries.push(entry);
    }

    public addEntries(entries: T[]): number {
        return this.__entries.push(...entries);
    }

    public abstract findEntry(...searchCriteria: any[]): T | undefined;

    public abstract hasEntry(entry: T): boolean;

    public abstract merge(list: IList<T>): IList<T>;

    public abstract toRecord(): any;

    public abstract toString(): string;
};
