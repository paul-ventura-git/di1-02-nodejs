// Saltarse elementos de un array
const myArray = [23, 67, 156, 1024];

const [first, , third] = myArray;

console.log(first);
console.log(third);

// Desestructuración anidada
const otherArray = [11, 56, "text", true, [1, 34]];

const [a, b, c, d, [otherFirst, otherSecond]] = otherArray;

console.log(otherFirst);
console.log(otherSecond);

// Desestructuración con el "Rest operator"
const cars = ["Audi", "Toyota", "Subaru", "Mercedes"]

const [primerAuto, ...rest] = cars;

console.log(primerAuto);
console.log(rest);

// Desestructuración en parámetros de funciones
function misAutos([favorito, ...rest]) {
  console.log(favorito)
}

misAutos(cars)