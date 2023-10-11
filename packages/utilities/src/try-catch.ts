import { Err, Ok, Result } from "ts-results-es";

export function tryCatch<O>(
    callback: (...args: any[]) => O,
    ...callbackParams: any[]
): Result<O, Error> {
    let error: Error | undefined;
    let result: any;

    try {
        result = callback(callbackParams);
    } catch (error: unknown) {
        if (typeof error === "string")
            error = new Error(error);
        else if (error instanceof Error)
            error = error;
        else
            error = new Error("An unspecified error occured");
    }

    if (error)
        return new Err(error);

    return new Ok(result as O);
};
