// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Destructuring
let {firstName : my_firstName, lastName : my_lastName} = person;

//console.log(my_firstName);
//console.log(my_lastName);

// Rest operator ("juntar")

const { firstName, ...rest } = person;
console.log(firstName);
console.log(rest);

// Spread operator ("separar")

function greet({...params}) {
  console.log("Hola: "+params.firstName);
}

greet(person)
