
// Conditional Statements

// 16.Determine whether a number is positive or negative.p 
const num = prompt("put your number")
switch (true) {
    case(num <= 0):
        console.log("negative")
        break;

    case (num >=0):
        console.log("Postive")
        break;

    default:
        console.log("Not a number");
};

//17. even or odd  numbers 
const num3 = Number(prompt("put your number:"));
switch (true) {
    case (num3 % 2=== 0):
        alert("even number");
        break;

    case (num3 % 2 !== 0):
        alert("odd number")
        break;
    default:
        alert("Not a number")};


//18.Compare two numbers and print the larger one

const num4 = Number(prompt("Enter first number:"));
const num5 = Number(prompt("Enter second number:"));

switch (true) {
    case num4 > num5:
        console.log(num4 + " is larger");
        break;

    case num5 > num4:
        console.log(num5 + " is larger");
        break;

    default:
        console.log("Both numbers are equal");
};


// 19.eligible to vote (18+) 

const age = Number(prompt("Enter your age:"));

switch (true) {
    case age >= 18:
        console.log("You are eligible to vote.");
        break;

    default:
        console.log("You are not eligible to vote.");
};

