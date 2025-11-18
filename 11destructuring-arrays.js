const myArray = [23, 67, 156, 1024];

const [first, , third] = myArray;

console.log(first);
console.log(third);

const otherArray = [11, 56, "text", true, [1, 34]];

const [a, b, c, d, [otherFirst, otherSecond]] = otherArray;

console.log(otherFirst);
console.log(otherSecond);