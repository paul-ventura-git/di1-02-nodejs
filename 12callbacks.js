// callback
function sumar(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function multiplicar(num1, num2) {
  const product = num1 * num2;
  return product;
}

function standardDeviation({...params}) {
  const sd = params.data;
  return sd;
}

// Funcion principal
function myCalculator(num1, num2, myCallback) {
    const resultado = myCallback(num1, num2);
    console.log("Resultado: "+resultado);
}

// Ejecución
myCalculator(5, 85, sumar);
myCalculator(87, 44, multiplicar);
myCalculator(standardDeviation(obj))