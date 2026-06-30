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



