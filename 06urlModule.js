const v_url = require('url');
const v_adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const v_q = v_url.parse(v_adr, true);

console.log(v_q);

console.log(v_q.host); //returns 'localhost:8080'
console.log(v_q.pathname); //returns '/default.htm'
console.log(v_q.search); //returns '?year=2017&month=february'

console.log("********************************************");

const qdata = v_q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata);
console.log(qdata.month); //returns 'february'