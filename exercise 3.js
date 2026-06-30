
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


//20. whether a student passed (50 or above).

const score = Number(prompt("Enter student mark:"));

switch (true) {
    case score >= 50:
        console.log("Passed");
        break;

    default:
        console.log("Failed");
};

//21.leap year
const year = Number(prompt("Enter a year:"));

switch (true) {
    case (year % 400 === 0):
        console.log("Leap year");
        break;

    case (year % 100 === 0):
        console.log("Not a leap year");
        break;

    case (year % 4 === 0):
        console.log("Leap year");
        break;

    default:
        console.log("Not a leap year");
};


//22.number is divisible by 5
const num6 = Number(prompt("Enter a number:"));

if (num6 % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log(" Not Divisible by 5");
    };


//23. assigning grades 90–100 → A, 80–89 → B,70–79 → C , 
//Below 70 → Fail
 
const mark = Number(prompt("Enter grades:"));
   switch(true){

 case(mark > 90 && mark <=100): 
    console.log("A");
    break;

case(mark > 80 && mark <=89): 
    console.log("B");
break;

case(mark > 70 &&  mark <=79): 
    console.log("C");
    break;

case(mark >69 && mark>=69):
     console.log("Fail");
  break;
   };


   //24.Check whether a character is a vowel.
const character = prompt("Enter a character").toLowerCase();

switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        alert(`${character} is a vowel`);
        break;

    default:
        alert("Not a vowel");
};


//25. Determine whether three sides can form a triangle.
const a = Number(prompt("Enter side A:"));
const b = Number(prompt("Enter side B:"));
const c = Number(prompt("Enter side C:"));

switch (true) {
    case (a + b > c && a + c > b && b + c > a):
        console.log("Valid triangle");
        break;

    default:
        console.log("Not a valid triangle");
};


// 27.Determine if a user can log in (correct username and password).

const username = prompt("Enter Username");
const password = prompt("Enter Password");
let tries = 3;

while(username !== "admin" && password !== "pass123"){
    const username = prompt("Enter Username");
    const password = prompt("Enter Password");
    tries--;

    if(username === "admin" && password === "pass123"){
        alert("You are signed in");
        let tries = 0;
    }

    else if(tries = 0){
        alert("You are locked out, try after 25 minutes!")
    }
    };


let tries1 = 3;

while (tries1 > 0) {
    const username = prompt("Enter Username");
    const password = prompt("Enter Password");

    if (username === "admin" && password === "pass123") {
        alert("You are signed in");
        break;
    } else {
        tries1--;
        alert("Wrong credentials. Tries left: " + tries);
    };

    if (tries1 === 0) {
        alert("You are locked out, try after 25 minutes!");
    }
};


//28.Check whether a person qualifies for a driving license (18+ and has ID).
let age1 = Number(prompt("Enter your age:"));
let hasID = prompt("Do you have an ID? (yes or no)");

while (true) {
    if(age1 >= 18 && hasID.toLowerCase() === "yes") {
        alert("you qualify for a driving license.");
        break;
    } else{
        alert("You do not qualify for adriving license");
        break;
    }
};

//29.Determine whether a number is divisible by both 3 and 5.

let num23 =1;
while (num23<= 100){
    if (num23 % 3=== 0 && num23 % 5 == 0){
        console.log (` ${num23} is divisible by both 3 and 5`);
        num23++;
    }
};
        

//30. Check whether a year is a century year.
function isCenturyYear(year) {
    let result = "";
    let i = 0;

    while (i < 1) {
        if (year % 400 === 0) {
            result = year + " is a century leap year";
        } else if (year % 100 === 0) {
            result = year + " is a century year (NOT a leap year)";
        } else {
            result = year + " is NOT a century year";
        }
        i++;
    }
    return result;   // ← now has a function to return to
}

// Call the function
console.log(isCenturyYear(2000));  // century leap year
console.log(isCenturyYear(1900));  // century year NOT leap
console.log(isCenturyYear(2024));  // not a century year



// loops (31-41)
//31.Print numbers from 1 to 10.
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
};

//32. Print numbers from 10 down to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
};

//33.Print all even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};


//34.Print the multiplication table of 5
let multiple = 1;

while (multiple <= 10) {
    console.log("5 x " + i + " = " + (5 * multiple));
    multiple++;
};


//35. Calculate the sum of numbers from 1 to 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
};

console.log("Sum of numbers from 1 to 100:", sum);

//36.Calculate the factorial of a number.
let number = 5;
let factorial = 1;

for (let i = number; i >= 1; i--) {
    factorial *= i;
};

console.log("Factorial of " + number + " is: " + factorial);


//37.Count how many numbers are divisible by 3 between 1 and 50
let divisible= 1;
let count = 0;

while (divisible <= 50) {
    if (divisible % 3 === 0) {
        count++;
    }
    divisible++;
}

console.log("Count of numbers divisible by 3 between 1 and 50:", count);


//38. Print the first 10 multiples of 7.
let multiples = 1;

while (multiple <= 10) {
    console.log("7 x " + multiple + " = " + (7 * multiple));
    multiple++;
};

//39. Print a pattern:
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log("**");
    } else {
        console.log("*");
    }
};


//40.Print all numbers between 1 and 100 that are divisible by both 3 and 5.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
};

