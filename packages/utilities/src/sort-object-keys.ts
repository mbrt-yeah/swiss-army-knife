import { arrayfy } from "./arrayfy.js";

export function sortObjectKeys(objs: any | any[], direction?: "asc" | "desc"): any[] {
    objs = arrayfy<any>(objs);

    const objsSorted: any[] = [];
    let sortFn = (a: string, b: string) => a.localeCompare(b);

    if (direction === "desc")
        sortFn = (a, b) => b.localeCompare(a);

    for (let obj of objs) {
        obj = Object.keys(obj).sort(sortFn).reduce((result, key) => {
            result[key] = obj[key];
            return result;
        }, {});

        objsSorted.push(obj);
    }

    return objsSorted;
};
