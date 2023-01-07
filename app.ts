const minCode: number = 'a'.charCodeAt(0); // 97
const maxCode: number = 'z'.charCodeAt(0); // 122

// 1
function getArrayFromString(str: string): string[] {
    return Array.from(str);
}

// 2
function getShift(shift: number): number {
    return shift % (maxCode - minCode + 1);
}

// 3
function charTransform(arrayChars: string[], shift: number, action: string): string {
    return arrayChars.map(char => {
        let charCode: number = char.charCodeAt(0)
        if (charCode >= minCode && charCode <= maxCode) {
            let charCodeShifted: number = action === "cipher" ? charCode + shift : charCode - shift;
            if (charCodeShifted > maxCode) {
                charCodeShifted = minCode + (charCodeShifted - maxCode) - 1;
            } else if (charCodeShifted < minCode) {
                charCodeShifted = maxCode - (minCode - charCodeShifted) + 1;
            }
            return String.fromCharCode(charCodeShifted);
        }
        else {
            return char;
        }
    }).join('')
}

function shiftCipher(str: string, shift: number = 1): string {
    let arrayChars: string[] = getArrayFromString(str);
    shift = getShift(shift);
    return charTransform(arrayChars, shift, "cipher");
}

function shiftDecipher(str: string, shift: number = 1): string {
    let arrayChars: string[] = getArrayFromString(str);
    shift = getShift(shift);
    return charTransform(arrayChars, shift, "decipher");
}

// test
// console.log("Cipher ->", shiftCipher("abc.!", 1));
// console.log("Decipher ->", shiftDecipher("abc.!", 1));
// console.log("Cipher ->", shiftCipher("abc.AB", 26));
// console.log("Decipher ->", shiftDecipher("abc.Cd", 26));
// console.log("Cipher ->", shiftCipher("abc.!WSXc", 3));
// console.log("Decipher ->", shiftDecipher("abz", 3));
