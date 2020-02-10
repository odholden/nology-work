// const addition = (num1, num2) => {
//     return num1 + num2;
// }

// const shortAdd = (num1, num2) => num1 + num2;

// const result = addition(12, 43);
// const shortResult = shortAdd(10, 13);
// console.log(shortResult);

const loom = (thread, dye) => {
    const cloth = "Cloth of color " + dye + " made with " + thread + " thread";
    return cloth;
}

const result = loom("cotton", "red");
console.log(result);





// write a function that returns the square root of a number
// const squareTheNumber = (number) => Math.sqrt(number);

const squareTheNumber = (number) => {
    return Math.sqrt(number);
} 

// write a function that checks if a number is an integer
const checkIsInteger = (number) => {
    return Number.isInteger(number);
}

const squareRoot = squareTheNumber(16);
const isInteger = checkIsInteger(squareRoot);

