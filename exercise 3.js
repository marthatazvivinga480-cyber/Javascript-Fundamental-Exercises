
// Conditional Statements

// 16.Positive or Negative 
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
