# @swiss-army-knife/models

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
