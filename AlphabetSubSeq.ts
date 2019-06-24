// Objective: Given a String, return a boolean as below example.
// For s = "effg" or s = "cdce" , the output should be alphabetSubSequence(s) = false;
// For s = "ace" or s = "bxz" , the output should be alphabetSubSequence(s) = true;
// Necessarily shouldnt be in series, but all the values before it should be less than
// all the values after it.

function alphabetSubSequence(inputString: string): boolean {
    //1.Split the string in to Array of charecters.
    //2.Store the charCode(ASCII value) in an array, and then 
    //3.Compare the size to a set which has only unique values
    //4.If they are not the same size then they have unique values, then return false.
    //5.Then sort the values, if any of them is greater than the previous one return false , else return true.
    const chars: string[] = inputString.split('');
    console.log(chars);
    const charValues: number[] = [];
    chars.forEach((char: string) => {
        console.log(char);
        charValues.push(char.charCodeAt(0))
        console.log(char.charCodeAt(0));
    });
    if (new Set(charValues).size !== charValues.length) {
        return false;
    }
    for (let i = 0; i <= charValues.length - 1; i++) {
        if (charValues[i] >= charValues[i + 1]){
            return false;
        };
    }
    return true;
}
console.log(alphabetSubSequence('abcde'))


