# @swiss-army-knife/utilities

## 2.0.0 

## Major Changes

- feat: New `createShortUniqueId` function which creates short unique ids using the `uid` package.
- feat: New `getObjectPropertyValue` function which retrieves a property value from an object.
- feat: New `sortObjectkeys` function which sort the keys/properties of an object in ascending/descending direction. 
- rewrite: The `tryCatch` function now accepts the callback function only as a whole.
- refactor: The package `ts-result`is replaced by `ts-result-es`.
- refactor: ESM style import/export statements are used throughout the project.

## 1.4.0

### Minor Changes

- rewrite: Data type of root property of `ITraverseDirResult` in `traverse-dir` function has been changed.

## 1.3.0

### Minor Changes

- feat: New `traverse-dir` function which visits all files and directories within a root directory.

## 1.2.1

### Patch Changes

- fix: Functions `transform-letters-to-number` and `transform-number-to-letters` added in 1.2.0 are now exported via main `index.ts` file.

## 1.2.0

### Minor Changes

- feat: New functions (`transform-letters-to-number` and `transform-number-to-letters`) in order to transform letters to numbers and vice versa.

## 1.1.3

### Patch Changes

- build: Valid build recreated.

## 1.1.2

### Patch Changes

- rewrite: The callback function parameters can now be passed to the `tryCatch` function.

## 1.1.1

### Patch Changes

- build: Valid build recreated.

## 1.1.0

### Minor Changes

- feat: New generic `tryCatch` function which executes a callback function in a try/catch block and returns a result object containing the result of the callback function or an error.

## 1.0.1

### Patch Changes

- build: Follows instructions for creating modern npm packages by Brian Clark (https://snyk.io/blog/best-practices-create-modern-npm-package/)

## 1.0.0

### Major Changes

- feat: New generic `arrayfy` function which when given an array returns it. Otherwise it wraps it's input in an array and returns the latter.
- feat: New `makeStringHumanReadable` function which removes excessive whitespace elements from a string
- feat: New `removeAllWhitespacesFromString` function which removes all whitespace elements from a string
