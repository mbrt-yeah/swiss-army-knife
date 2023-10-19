import {describe, expect, it } from "@jest/globals";

import { XmlParser } from "./xml-parser";

const invalidXml = "<root<helloworld<root></hello";
const validXml = "<root><hello>world</hello></root>"

describe("XmlParser", () => {
    describe("execute", () => {
        it("should parse valid XML without an error", async () => {
            const parser = new XmlParser(validXml);
            const executeResult = await parser.execute();

            expect(executeResult.isErr()).toBe(false);
            expect(executeResult.unwrap()).toBeInstanceOf(Object)
        })
        it("should not parse invalid XML and raise an error", async () => {
            const parser = new XmlParser(invalidXml);
            const executeResult = await parser.execute();

            expect(executeResult.isErr()).toBe(true);
            expect(executeResult.unwrap()).toBeInstanceOf(Error);
        })
    })
});