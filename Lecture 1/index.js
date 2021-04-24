var firstName = "Jahanzeb"; // camel notation
/* FirstName // pascal notation
first_name // snake notation */
var lastName = "Name";

// alert(firstName + " " + lastName);
// console.log(firstName + " " + lastName);

// Name();

// Global
function Name() {
    var title = "Mr";
    console.log(firstName);
}

// console.log(title);

if (1 == 1) {
    var greeting = "Hello";
    let greeting2 = "how are you";
}

// console.log(greeting);
// console.log(greeting2);

// if (1 == 1 && 2 == 2) {
//     console.log("I am true")
// }

class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
}

let person1 = new Person("Jahanzeb", "Name");

// person1.firstName;

console.log("walk out of the house");
console.log("turn left");
walkRobot();
console.log("buy milk");

function walkRobot() {
    console.log("take step");
    console.log("take step");
    console.log("take step");
    console.log("take step");
    console.log("take step");
}