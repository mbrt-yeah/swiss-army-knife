/// <reference types="node" />

import { ParsedPath } from "node:path";

export interface IPathProperties {
    parsedValue: ParsedPath;
    serializedValue: string;
};
