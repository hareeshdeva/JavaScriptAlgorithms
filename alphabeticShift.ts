// Objective: Write a function that, given a string, replaces each character by the next one in the English alphabet

function alphabeticShift(inputString: string): string {

    const alphabet: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //Split each individual charecter.
    let inputShifted = inputString.split('');
    for (let i = 0; i < inputShifted.length; i++) {
        let index = 0;

        if (inputShifted[i] !== 'z') {
            index = alphabet.indexOf(inputShifted[i]) + 1;
        }
        console.log(index);
        console.log(inputShifted[i]);
        inputShifted[i] = alphabet[index];
        console.log(alphabet[index]);
    }
    return inputShifted.join('');
}

console.log(alphabeticShift('crazy'));