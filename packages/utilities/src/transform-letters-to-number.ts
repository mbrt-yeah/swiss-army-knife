/**
 * @see https://gist.github.com/westc/c8a08042d176600850a5e5cbc4c226e9
 * Takes a column name and returns the corresponding integer (eg. E becomes 5).
 * @param {string} letters
 *     The column name (eg. A, B, C, ..., Z, AB, AC, etc.) to be converted to an
 *     integer.
 * @param {?boolean=} isZeroBased = false
 *     Indicates if the returned number should be 0-based.  If 0-based "E" will
 *     become 4.
 * @return {number}
 *     The integer representing the column name.
 */
export function transformLettersToNumber(letters: string, isZeroBased: boolean = false) {
    if (!/^[A-Za-z]+$/.test(letters))
        throw new TypeError("The letters must be a string of one or more letters (a to z).");

    let number = 0;

    for (let i = letters.length, j = 0; i--; j++)
        number += Math.pow(26, i) * (letters.charCodeAt(j) - 64);

    if (isZeroBased)
        return number - 1;

    return number; 
};