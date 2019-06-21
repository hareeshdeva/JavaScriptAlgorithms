/*
Problem:
Given an Array of Strings, return another array containing all of its longest strings.
InputArray = ["abc","aa","er","bcd"] 
OutputArray = ["abc","bcd"]
*/ 

function allLongestStrings(array: string[]): string[]{
    let longestLength = 0;
    const lonestWords  = [] ;

    array.forEach((word : string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    array.forEach((word : string) => {
        if(word.length === longestLength){
            lonestWords.push(word);
        }
    });
    return lonestWords;
}

console.log(allLongestStrings(["abc","aa","er","bcdh"]));