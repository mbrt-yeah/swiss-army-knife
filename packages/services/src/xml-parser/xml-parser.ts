import { Err, Ok, Result } from "ts-results";
import { XMLParser as FastXmlParser, X2jOptions } from "fast-xml-parser";

import { IXmlParser } from "./i-xml-parser";
import { IXmlParserOptions } from "./i-xml-parser-options";

export class XmlParser implements IXmlParser {
    public data: string;
    public options: Partial<X2jOptions>;

    public constructor(options: IXmlParserOptions = {}) {
        this.data = options.data || "";
        this.options = options.options || {}
    }

    public async execute(): Promise<Result<Record<string, any>, Error>> {
        return new Promise((resolve) => {
            const executeSyncResult = this.executeSync();
            return resolve(executeSyncResult);
        });
    }

    public executeSync(): Result<Record<string, any>, Error> {
        const parser = new FastXmlParser(this.options);
        let result: Result<Record<string, any>, Error> = new Ok({});

        try {
            const parserResult = parser.parse(this.data);
            result = new Ok(parserResult);
        } catch(error: unknown) {
            result = new Err(error as Error);
        }

        return result;
    }
};
