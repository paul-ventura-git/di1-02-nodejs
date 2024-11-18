setTimeout(myFunction, 3000);

function myFunction() {
    console.log("I love You !!");
}

setTimeout(function() { myFunction_2("I love You !!!"); }, 3000);

function myFunction_2(value) {
    console.log(value);
}