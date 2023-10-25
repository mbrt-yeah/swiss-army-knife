import { join, resolve } from "node:path";
import { Result } from "ts-results-es";
import { tryCatch } from "@swiss-army-knife/utilities";
import { writeFileSync } from "node:fs";

interface ICeatePackageJsonForBuildOptions {
    absoluteModuleBasePath: string,
    relativeTsConfigPath?: string | undefined,
    packageJsonProps?: Record<string,any> | undefined,
};

export function createPackageJsonForBuild(options: ICeatePackageJsonForBuildOptions): Result<void, Error> {
    const absoluteTsConfigPath = resolve(
        options.absoluteModuleBasePath,
        options.relativeTsConfigPath || "./tsconfig.json"
    );

    const tsConfig = require(absoluteTsConfigPath);

    const declarationDir = tsConfig.compilerOptions.declarationDir || "./types";
    const outDir = tsConfig.compilerOptions.outDir || "./dist";

    const typesDirRelativePath = declarationDir.replace(outDir, "");
    const typesEntryFileRelativePath = `.${typesDirRelativePath}/index.d.ts`;

    const packageJsonFinal = Object.assign({}, options.packageJsonProps || {})
    packageJsonFinal["types"] = typesEntryFileRelativePath;
    packageJsonFinal["main"] = "./index.js";

    const absoluteBuildDirPath = resolve(
        options.absoluteModuleBasePath,
        outDir,
    );

    return tryCatch(() => {
        return writeFileSync(join(absoluteBuildDirPath, "package.json"), JSON.stringify(packageJsonFinal, null, 4));
    });
};
