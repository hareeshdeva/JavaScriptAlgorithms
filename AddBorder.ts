/*
Hints: unshift()
       push()
       concat()
*/
function addBorder(picture: string[]): any {
//Step1: Take the first value and get the length of it
//Step2: Now add that length of wall to starting index and ending index.
const lengthOfWall = picture[0].length + 2;
let wall = '';

for(let i = 0; i < lengthOfWall; i++){
    wall = wall.concat('*')
}
//unshift inserts new elements at the starting of Array.
picture.unshift(wall);
//Appends new elements to an array, and returns the new length of the array.
picture.push(wall);
console.log(picture.length);
for(let i = 1; i < picture.length - 1; i++){
picture[i] = '*'.concat(picture[i], '*');
}
return picture;
}

console.log(addBorder(["abc","def"]));