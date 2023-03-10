export function makeStringHumanReadable(s: string): string {
    if (!s)
        return "";

    return s.replace(/\s+/g, " ").trim();
};
