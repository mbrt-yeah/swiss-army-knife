import { Result } from "ts-results-es";
import { tryCatch } from "@swiss-army-knife/utilities";
import { XMLParser as FastXmlParser, X2jOptions } from "fast-xml-parser";

import { IXmlParser } from "./i-xml-parser.js";

export class XmlParser implements IXmlParser {
    private __data: string;
    private __options: Partial<X2jOptions>;

    public constructor(data: string, options: Partial<X2jOptions> = {}) {
        this.__data = data || "";
        this.__options = options || {}
    }

    public async execute(): Promise<Result<Record<string, any>, Error>> {
        return new Promise((resolve) => {
            const executeSyncResult = this.executeSync();
            return resolve(executeSyncResult);
        });
    }

    public executeSync(): Result<Record<string, any>, Error> {
        return tryCatch(() => {
            const parser = new FastXmlParser(this.__options);
            return parser.parse(this.__data);
        });
    }
};
