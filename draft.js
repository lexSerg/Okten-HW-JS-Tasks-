let date = new Date;
//let formatDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
let strDate = date.toLocaleDateString();
let strTime = date.toLocaleTimeString()
console.log(`${strDate}, ${strTime}`)
