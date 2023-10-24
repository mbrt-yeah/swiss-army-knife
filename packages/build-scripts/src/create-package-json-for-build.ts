import { join, resolve } from "node:path";
import { writeFile } from "node:fs";

interface ICeatePackageJsonForBuildOptions {
    packageJsonPath: string,
    tsConfigPath: string,
    packageJsonProps: Record<string,any>;
}

export function createPackageJsonForBuild(options: ICeatePackageJsonForBuildOptions) {
    const packageJson = require(options.packageJsonPath);
    const tsConfig = require(options.tsConfigPath);
    const packageJsonProps = options.packageJsonProps || {};

    const declarationDir = tsConfig.compilerOptions.declarationDir;
    const outDir = tsConfig.compilerOptions.outDir;

    const typesDirRelativePath = declarationDir.replace(outDir, "");
    const typesEntryFileRelativePath = `.${typesDirRelativePath}/index.d.ts`;

    const packageJsonFinal = Object.assign(packageJson, packageJsonProps)
    packageJsonFinal["types"] = typesEntryFileRelativePath;
    packageJsonFinal["main"] = "./index.js";

    if (packageJsonFinal["exports"])
        delete packageJsonFinal["exports"];

    if (packageJsonFinal["files"])
        delete packageJsonFinal["files"];

    const buildDirAbsolutePath = resolve(__dirname, join("../",outDir), "package.json");

    writeFile(buildDirAbsolutePath, JSON.stringify(packageJsonFinal, null, 4), (error) => {
        if (error)
            console.error(error);
    });

    return packageJsonFinal;
};
