// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Destructuring
let {firstName : my_firstName, lastName : my_lastName} = person;

console.log(my_firstName);
console.log(my_lastName);