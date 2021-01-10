// let date = new Date;
// //let formatDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
// let strDate = date.toLocaleDateString();
// let strTime = date.toLocaleTimeString()
// console.log(`${strDate}, ${strTime}`)
// let regExp = /[\w\.\,]/g;
// let str = 'Hello, Mr. Smith'
// let res = str.match(regExp);
// console.log(res);

// let s = '';
// s = String.fromCharCode(1103,1104,1105);
// console.log(s);

//*Деструктуризация обьектов
const user = {
    name : 'Natan',
    age : 25,
    email : 'natan@gmail.com'
};
const {name: userName, age, email} = user;
// console.log(userName, age, email);

const developer = {
    firsName: 'Mark',
    lastName: 'Czukerberg',
    job: {
        pozition: 'Junior',
        company: {
            name: 'Facebook Corp',
            adress: 'Naukova 3B'
        }
    }
};
const {job: marksJob} = developer;
const { job : { company : { name : facebookName } }} = developer
// console.log(marksJob);
// console.log(facebookName);
//*Деструктуризация массива
const products = ['Apple', 'Eggs', 'Fish', 'Meat' ]
const [apple, eggs, fish] = products;
// console.log(apple, eggs, fish);
const profeccions = [
    ['DEV', 'PM', 'QA'],
    ['CEO', 'CTO', 'CIO'],
    ['HR', 'Office Manager', 'Lawyer']
];
const {0: [,pm], 1: [,,cio]} = profeccions;
const [[],[],[hr,,law]] = profeccions
// console.log(pm, cio);
// console.log(hr,law);
const car = {
    model : 'Nissan',
    color : 'gray'
};
const userWithCar1 = Object.assign({}, developer, car);
const userWithCar2 = {...developer, ...car}
// console.log(userWithCar1);
// console.log(userWithCar2);
// *Одноуровневая копия обекта или массива через деструктуризацию
const userWithCarCopy = {...userWithCar1};
const {firsName, model, ...other} = userWithCarCopy;
// userWithCar1.color = 'sdfdf'
// console.log(userWithCarCopy);
// console.log(userWithCar1);
// console.log(userWithCarCopy);
// console.log('------------------');
// console.log(firsName, model, other);

function hellowDeweloper({firsName, lastName}) {
    console.log(`Hellow ${firsName} ${lastName}`);
};
// hellowDeweloper(developer);

const names = ['Вася', 'Петя', 'Вася', 'Толик', 'Петя', 'Петро'];
const uniqueNames = new Set(names);
const uniqueNamesArr = [...uniqueNames];
// console.log(uniqueNames);
// console.log(uniqueNamesArr);

const map = new Map;
map.set(158, 3);
console.log(map);
console.log('*******');
map.set(158, 5);
console.log(map);