//1. Print every number in an array.
const numbers = [5, 10, 15, 20, 25];

numbers.forEach(number => {
    console.log(number);
});
 
//2.Print every number in an array
const names = ["Alice", "Bob", "Charlie", "David"];
names.forEach(function(name) {
    console.log(name)

});

//3.Print each fruit in uppercase.

const fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit) {
    console.log(fruit.toUpperCase());
});

//4.Find the sum of all numbers.
const numbers1 = [2, 4, 6, 8, 10];
let sum = 0;

numbers1.forEach(function(number) {
    sum += number;
});

console.log(sum);

//5.Count how many items are in the array using a foreach loop.
const numbers2 = [5, 10, 15, 20, 25];
let count = 0;

numbers2.forEach(function(number) {
    count++;
});

console.log(count);

//6 Find the largest number in an array.
const numbers3 = [12, 45, 7, 89, 23];
let largest = numbers3[0];

numbers3.forEach(function(number) {
    if (number > largest) {
        largest = number;
    }
});

console.log(largest);

//7.Count how many numbers are even.
// Count how many numbers are even
const num4 = [1, 2, 3, 4, 5, 6, 7, 8];

let evenCount = 0;

num4.forEach(function(number) {
    if (number % 2 === 0) {
        evenCount++;
    }
});
console.log(evenCount);

//8.Print only names that start with the letter "A"
const names4 = ["Alice", "Bob", "Andrew", "Charlie", "Amy"];

names4.forEach(function(name) {
    if (name.startsWith("A")) {
        console.log(name);
    }
});

//9.Count how many vowels are in an array of letters.
const letters = ["a", "b", "e", "g", "i", "o", "u"];

let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

letters.forEach(function(letter) {
    if (vowels.includes(letter)) {
        vowelCount++;
    }
});

console.log(vowelCount);

//10.Create a new array where each number is doubled
// Create a new array where each number is doubled
const num5 = [1, 2, 3, 4, 5];

let doubled = [];

num5.forEach(function(num) {
    doubled.push(num * 2);
});

console.log(doubled);

//11.calculate the average of all numbers in an array
{
    const num6 = [10, 20, 30, 40];

    let sum = 0;

    num6.forEach(function(num) {
        sum += num;
    });

    let average = sum / num6.length;

    console.log("Average:", average);
};

//12.Find the longest word in an array.
const words = ["apple", "banana", "strawberry", "kiwi"];

let longestWord = "";

words.forEach(function(word) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
});

console.log("Longest word:", longestWord);
