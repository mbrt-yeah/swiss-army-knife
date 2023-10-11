import { IExecutable } from "@swiss-army-knife/models";
import { IXmlParserProperties } from "./i-xml-parser-properties.js";

export interface IXmlParser extends IXmlParserProperties, IExecutable<Record<string, any>> {} {

};