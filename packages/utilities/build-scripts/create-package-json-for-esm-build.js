const { createPackageJsonForBuild } = require("@swiss-army-knife/build-scripts");
const { resolve } = require("path");

createPackageJsonForBuild({
    absoluteModuleBasePath: resolve(__dirname, "../"),
    relativeTsConfigPath: "./tsconfig.esm.json",
    packageJsonProps: {
        type: "module"
    }
});
