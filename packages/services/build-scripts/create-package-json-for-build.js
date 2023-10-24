const fs = require("fs");
const path = require("path");

const createPackageJsonForBuild = (options) => {
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

    const buildDirAbsolutePath = path.resolve(__dirname, path.join("../",outDir), "package.json");

    fs.writeFile(buildDirAbsolutePath, JSON.stringify(packageJsonFinal, null, 4), (error) => {
        if (error)
            console.error(error);
    });

    return packageJsonFinal;
};

module.exports = createPackageJsonForBuild;