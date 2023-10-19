import { uid } from "uid";


export function createShortUniqueId(size: number = 10) {
    return uid(size);
};
