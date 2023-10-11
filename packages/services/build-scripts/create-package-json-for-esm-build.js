const path = require("path");
const createPackageJsonForBuild = require("./create-package-json-for-build");

createPackageJsonForBuild({
    packageJsonPath: path.resolve(__dirname, "../package.json"),
    tsConfigPath: path.resolve(__dirname, "../tsconfig.esm.json"),
    packageJsonProps: {
        type: "module"
    }
});
