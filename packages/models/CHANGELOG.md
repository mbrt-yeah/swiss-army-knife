# @swiss-army-knife/models

## 1.3.0

### Minor Changes

- Rewrites and enhances `File` class with root and stats properties.

## 1.2.7

### Patch Changes

- Refactors (file|folder)path logic

## 1.2.6

### Patch Changes

- Updated dependencies
  - @swiss-army-knife/utilities@1.2.1

## 1.2.5

### Patch Changes

- Updated dependencies
  - @swiss-army-knife/utilities@1.2.0

## 1.2.4

### Patch Changes

- Updated dependencies
  - @swiss-army-knife/utilities@1.1.3

## 1.2.3

### Patch Changes

- Updated dependencies
  - @swiss-army-knife/utilities@1.1.2

## 1.2.2

### Patch Changes

- Updated dependencies
  - @swiss-army-knife/utilities@1.1.1

## 1.2.1

### Patch Changes

- Updated dependencies
  - @swiss-army-knife/utilities@1.1.0

## 1.2.0

### Minor Changes

- Adds `toRecord` and to `toString` method to generic interface `IList`

## 1.1.3

### Patch Changes

- Updated dependencies
  - @swiss-army-knife/utilities@1.0.1

## 1.1.2

### Patch Changes

- Fixes wrong path to `index.d.ts` of cjs build

## 1.1.1

### Patch Changes

- Follows instructions for creating modern npm packages by Brian Clark (https://snyk.io/blog/best-practices-create-modern-npm-package/)

## 1.1.0

### Minor Changes

- New abstract and generic `AList` base class to model lists

## 1.0.0

### Major Changes

- Abstract `AFile` base class to model files
- Classes to model folder and file paths (`FolderPath` and `FilePath`)
- New `IConstructor` interface which can be used as a constructor data type
- New generic `IExecutable` interface which can be implemented by classes whose instances need somehow be executed
- New `IRecord` interface which can be used as a little bit stricter data type for a generic javascript object instead of `any`
