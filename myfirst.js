var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2025&month=january';
var q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathabebe);
console.log(q.search); 

var qdata = q.query; 
console.log(q2025.january); 
