/*
[1,3,2,1] ----> False
[1,3,2]   ----> True
*/

function almostIncreasingSeq(array: number[]): boolean{
//how many times the numbers are out of sync.
let count = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] <= array[i - 1]){
        count++;
        if(array[i] <= array[i - 2] && array[i + 1] <= array[i - 1]){
            return false;
        }
    }
}
return count <= 1;
}

console.log(almostIncreasingSeq([1,3,2,1]));
console.log(almostIncreasingSeq([1,3,2]));
