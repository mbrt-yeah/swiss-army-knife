export function transformNumberToLetters(colNumber: number, isZeroBased: boolean = false): string {
    if (!isZeroBased)
        colNumber -= 1;

    let letters = ""

    while (colNumber >= 0) {
        letters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[colNumber % 26];
        colNumber = Math.floor(colNumber / 26) - 1
    }

    return letters
};
