# @swiss-army-knife/utilities

## 1.1.3

### Patch Changes

- Recreates valid build

## 1.1.2

### Patch Changes

- Allows passing of callback parameters to `tryCatch` function

## 1.1.1

### Patch Changes

- Recreates valid build

## 1.1.0

### Minor Changes

- Adds new generic `tryCatch` function which executes a callback function in a try/catch block and returns a result object containing the result of the callback function or an error.

## 1.0.1

### Patch Changes

- Follows instructions for creating modern npm packages by Brian Clark (https://snyk.io/blog/best-practices-create-modern-npm-package/)

## 1.0.0

### Major Changes

- New generic `arrayfy` function which when given an array returns it. Otherwise it wraps it's input in an array and returns the latter.
- New `makeStringHumanReadable` function which removes excessive whitespace elements from a string
- New `removeAllWhitespacesFromString` function which removes all whitespace elements from a string
