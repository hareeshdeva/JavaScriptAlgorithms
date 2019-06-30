/*
Problem 13.
 
You are given an array of integers. On each move, you are allowed to increase
exactly one of its elements by one. Find the minimal number of moves required
to obtain a strictly increasing sequence from the input.
 
*/
function arrayChange(number: number[]): number {
    let turnsNeeded: number = 0;
for(let i = 0;i < number.length; i++){
    if(number[i] <= number[i - 1]){
        turnsNeeded += (number[i - 1] + 1) - number[i];
        console.log(turnsNeeded)
        number[i] = number[i - 1] + 1;
    }
    console.log(number[i])
}
    return turnsNeeded;
}


console.log(arrayChange([2,1,3]))