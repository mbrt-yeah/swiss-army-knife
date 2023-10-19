import { File, FilePath, Folder, IFile } from "@swiss-army-knife/models";
import { Ok, Result } from "ts-results-es";
import { Stats, statSync } from "node:fs";
import { tryCatch } from "@swiss-army-knife/utilities";

import { FileContentReader } from "../file-content-reader/file-content-reader.js";
import { IFileReader } from "./i-file-reader.js";
import { IFileReaderOptions } from "./i-file-reader-options.js";

export class FileReader implements IFileReader {
    private __encoding: BufferEncoding;
    private __filePath: string;
    private __loadContents: boolean;
    private __rootFolder: Folder | undefined;
    private __stats: Stats | undefined;

    public constructor(filePath: string, options: IFileReaderOptions = {}) {
        this.__encoding = options.encoding || "utf8";
        this.__filePath = filePath;
        this.__loadContents = options.loadContents || false;
        this.__rootFolder = options.rootFolder;
        this.__stats = options.stats;
    }

    public async execute(): Promise<Result<IFile<any>, Error>> {
        const createFileResult = this.__createFile(this.__filePath, this.__rootFolder, this.__stats);

        if (createFileResult.isErr())
            return createFileResult;

        const file = createFileResult.unwrap();

        if (!this.__loadContents)
            return new Ok(file);

        return this.__loadFileContents(file);
    }

    public executeSync(): Result<IFile<any>, Error> {
        const createFileResult = this.__createFile(this.__filePath, this.__rootFolder, this.__stats);

        if (createFileResult.isErr())
            return createFileResult;

        const file = createFileResult.unwrap();

        if (!this.__loadContents)
            return new Ok(file);

        return this.__loadFileContentsSync(file);
    }

    private __createFile(filePathSerialized: string, rootFolder?: Folder, stats?: Stats): Result<File<any>, Error> {
        const createFilePathResult = this.__createFilePath(filePathSerialized);

        if (createFilePathResult.isErr())
            return createFilePathResult;

        const filePath = createFilePathResult.unwrap();

        const file = new File({
            data: undefined,
            path: filePath,
            root: (rootFolder) ? rootFolder : undefined,
            stats: (stats) ? stats : statSync(filePath.serializedValue),
        });

        return new Ok(file);
    }

    private __createFilePath(filePath: string): Result<FilePath, Error> {
        return tryCatch(() => new FilePath(filePath));
    }

    private async __loadFileContents(file: File<any>): Promise<Result<File<any>, Error>> {
        const fileContentReader = new FileContentReader(file.path.serializedValue, {
            encoding: this.__encoding,
        });

        const executeResult = await fileContentReader.execute();

        if (executeResult.isErr())
            return executeResult;

        file.data = executeResult.unwrap();
        return new Ok(file);
    }

    private __loadFileContentsSync(file: File<any>): Result<File<any>, Error> {
        const fileContentReader = new FileContentReader(file.path.serializedValue, {
            encoding: this.__encoding,
        });

        const executeResult = fileContentReader.executeSync();

        if (executeResult.isErr())
            return executeResult;

        file.data = executeResult.unwrap();
        return new Ok(file);
    }
};
