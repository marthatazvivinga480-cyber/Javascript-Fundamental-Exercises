
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