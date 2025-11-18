import { backend } from './backend.js'
import * as v_fs from 'fs';
//const v_fs = require('fs');


//console.log(backend)

function fprincipal(callback){
  console.log(callback)
}

function fcallback(){
    const answer = v_fs.readFile('mynewfile1.txt', function(err, data) {
    return answer
  })
}

fprincipal(fcallback);