// let date = new Date;
// //let formatDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
// let strDate = date.toLocaleDateString();
// let strTime = date.toLocaleTimeString()
// console.log(`${strDate}, ${strTime}`)
let regExp = /[\w\.\,]/g;
let str = 'Hello, Mr. Smith'
let res = str.match(regExp);
console.log(res);

let s = '';
s = String.fromCharCode(1103,1104,1105);
console.log(s);