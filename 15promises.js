function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

// The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

/*
crear el archivo en el directorio , objeto
importar el archivo
leer el objeto con console.log

crear una variable con const donde almaceno la data del archivo
(en data ya esta el objeto)
crear una funcion-principal y le paso callback
crear la funcion-callback le paso data
ejecuto funcion-principal(funcion-callback)
*/
