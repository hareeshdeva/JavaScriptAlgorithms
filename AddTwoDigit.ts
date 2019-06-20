/*
Hints: split()
       parseInt()
       toString()
       reduce()
*/
function addTwoDigitNumner(digits: any): number {
const nums = digits.toString().split('');

return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
});
}
console.log(addTwoDigitNumner(29));