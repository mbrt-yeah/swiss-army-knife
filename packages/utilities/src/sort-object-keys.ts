import { arrayfy } from "./arrayfy.js";

export function sortObjectKeys(objs: any | any[], direction?: "asc" | "desc"): any[] {
    const objsUnsorted = arrayfy<any>(objs);
    const objsSorted: any[] = [];

    let sortFn = (a: string, b: string) => a.localeCompare(b);

    if (direction === "desc")
        sortFn = (a, b) => b.localeCompare(a);

    for (let obj of objsUnsorted) {
        obj = Object.keys(obj).sort(sortFn).reduce((result: any, key: string) => {
            result[key] = obj[key];
            return result;
        }, {});

        objsSorted.push(obj);
    }

    return objsSorted;
};
