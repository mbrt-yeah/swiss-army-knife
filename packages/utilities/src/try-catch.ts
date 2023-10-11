import { Err, Ok, Result } from "ts-results-es";

export function tryCatch<O>(callback: (...args: any[]) => O): Result<O, Error> {
    let errorReturned: Error | undefined = undefined;

    let result: any;

    try {
        result = callback();
    }
    catch (errorCaught: unknown) {
        if (typeof errorCaught === "string")
            errorReturned = new Error(errorCaught);
        else if (errorCaught instanceof Error)
            errorReturned = errorCaught;
        else
            errorReturned = new Error("An unspecified error occured");
    }

    return (errorReturned) ? new Err(errorReturned) : new Ok(result);

}
