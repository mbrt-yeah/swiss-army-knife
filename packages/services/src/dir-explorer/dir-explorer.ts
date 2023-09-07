import { IDirExplorer } from "./i-dir-explorer";

export class DirExplorer implements IDirExplorer {
    public listFiles(includeSubDirs: boolean = true, filter?: (() => any) | undefined): any[] {
        throw new Error("Method not implemented.");
    }

    public listDirs(includeSubDirs: boolean = true, filter?: (() => any) | undefined): any[] {
        throw new Error("Method not implemented.");
    }
}