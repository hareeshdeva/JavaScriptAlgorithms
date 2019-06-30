function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
let sum = 0;
let max = 0;

for(let i = 0; i < k; i++){
    sum += inputArray[i];
    console.log(inputArray[i]);
}
max = sum;
console.log(sum);

for(let i = k; i < inputArray.length; i++){
    //sum = 5
    //i = 2, k = 2
    console.log(inputArray[i - k]);
    sum -= inputArray[i - k];
    console.log(sum);
    console.log(inputArray[i]);
    sum += inputArray[i];

    if(sum > max) {
        max = sum;
    }
}
    return max;
}
console.log(arrayMaxConsecutiveSum([2,3,5,1,6], 2));