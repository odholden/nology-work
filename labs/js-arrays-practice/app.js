const myArray = [12, 4, 26, 44, 1043, 2];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (number of myArray) {
    console.log(number);
}

myArray.forEach((number, index) => {
    console.log(number, index);
});

const nology = [
    ["Jonny", "Sunny", "Annika", "Sophie"],
    ["Andy", "Nasir", "Sonia", "Sam"]
];

const state = "mississippi";
// Loop through the state and replace all the i's with 1s
// 1. Loop through the string
const newState = [...state];
for (let i = 0; i < newState.length; i++) {
    if (newState[i] === "i") {
        newState[i] = 1;
    }
}
console.log(newState);
// 2. if the letter is i, replace it with 1 (inside the loop)
// 3. console.log the new string.
// BONUS: replace the s's with 5s
















const names = ["Benny", "Anna", "Bjorn", "Anna"];

// 1. Loop through the names and print each one
// 2. Print every letter from the second name in the list
// 3. Loop through the array and print the length of each name
// 4. Use an array method to find the index of the name "Bjorn"
// 5. Loop through the array and print each item in alphabetical order

// EXTENSION
    // 1. Sort the array by the length of the names, shortest to largest
    // 2. Only return names that start with a "B"
    // 3. Using the sort and reduce methods, return the word "ABBA" using the array
    // 4. Using map, print each name adding "the legend" to the end of each.

// Fizzbuzz
// 1. console.log all numbers to 1000
// 2. If the number is divisible by 3, replace it with fizz
// 2. If the number is divisible by 5, replace it with buzz
// 3. divisible by both, fizzbuzz!!!!!!