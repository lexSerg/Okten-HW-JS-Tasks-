/*- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте ) */
// let
//   car = {
//     brand: "BMW",
//     model: "X5",
//     year: 2007,
//   },
//   person = {
//     name: "Denis",
//     surname: "Rublev",
//     age: 25,
//   },
//   dog = {
//     species: "Belgian shepherd",
//     owner: "Andrew",
//     variety: ["Grunendal", "Lakenua", "Malinois", "Tervuren"],
//   },
//   facebook = {
//     siteType: "social network",
//     url: "https://facebook.com",
//     registration: "free",
//   },
//   book = {
//     author: ["Kathy Sierra", "Bert Bates "],
//     publisher: "O'Reilly Media",
//     editionNumber: 2,
//   };
/*- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } }; */

// let
//    deadByApril = {
//     genre: ["metalcor", "elektronikor", "alternative metal", "modern metal"],
//     placeOfCreation: "Gothenburg",
//     currentMembers: {
//       guitar: "Pontus Helm",
//       bassGuitar: "Marcus Wesslen",
//       drums: "Marcus Rosell",
//       extremeVocals: "Christopher Christensen",
//     },
//   },
//   fridge = {
//     overallVolume: "400l",
//     energyClass: "A++",
//     additionalFeatures: [
//       "SuperFreezing Function",
//       "LED lighting",
//       "Multi Airflow Technology",
//       "SuperCooling fast cooling function",
//       "VitaFresh Technology",
//     ],
//     proportions: {
//       width: 600,
//       height: 2030,
//       depth: 660,
//     },
//   },
//   driver = {
//     name: "Pavel",
//     age: 38,
//     isMarried: false,
//     category: ["B", "B1", "C", "C1"],
//     other: {
//       smoking: false,
//       isHeadInjuries: true,
//       drivingExperience: 15,
//     },
//   },
//   house = {
//     place: "Kharkiv",
//     total_area: 280,
//     rooms_number: 5,
//     household_appliances: ["dishwasher", "washer", "fridge", "stove"],
//     otherFeatures: {
//       garage: true,
//       gymnasium: false,
//       alcove: false,
//       mantelpiece: true,
//       swimming_pool: false,
//     },
//   },
//   whiskey = {
//     appellative: " Chivas Regal",
//     exposure: 12,
//     kind: "blend",
//     region: "Speyside",
//     size: {
//       w: 96,
//       h: 240,
//       l: 96,
//     },
//     flavor: ["Spicy", "Sweet", "Fruity"],
//   };

/*- При помощи for in вывести все ключи всех объектов из задания 1 и 2 */
// const objArr = [
//   car,
//   person,
//   dog,
//   facebook,
//   book,
//   deadByApril,
//   fridge,
//   driver,
//   house,
//   whiskey,
// ];
// console.log(objArr);
// for (const iter of objArr) {
//     console.log(iter);
//     for (const key in iter) {
//         console.log(key);
//     }
// };
/* При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2 */
// for (const iter of objArr) {
//    console.log( Object.keys(iter));
// };

/*- проитерировать каждый массив из задания 5,6,7 при помощи while. */
// let count = 0;
// while(count < objArr.length) {
//     console.log(objArr[count]);
//     count++;
// };
// for (let i = 0; i < objArr.length; i++) {
//     console.log(objArr[i]);
// };

/*- проитерировать каждый массив из задания 5,6,7 при помощи  for of. */
// for (const iter of objArr) {
//     console.log(iter);
// };

/*- взять объекты из задания 1 и превратить каждый в json. */
// const stringifyArr = [];
// for (const iter of objArr) {
//     let stringify = JSON.stringify(iter);
//     stringifyArr.push(stringify);
// };
// console.log(stringifyArr);

/*- взять json из задания 11 и превратить их обратно в объекты. */
// const parseArr = [];
// for (const iter of stringifyArr) {
//     let parse = JSON.parse(iter);
//     parseArr.push(parse);
// };
// console.log(parseArr);

/*- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills */

// const users = [
//   { name: "Andrew", age: "15", skills: ["Html", "Css", "Js"] },
//   { name: "Max", age: "22", skills: ["C#", ".Net", "Python"] },
//   { name: "Vika", age: "33", skills: ["Ruby", "Scala", "Swift"] },
//   { name: "Mark", age: "45", skills: ["Java", "Cotlin", "GO"] },
//   { name: "Tom", age: "24", skills: ["Pascal", "Delphy", "Assembler"] },
//   { name: "Kate", age: "51", skills: ["Python", "Ruby", "Dart"] },
//   { name: "Julia", age: "28", skills: ["Lisp", "Js", "node js"] },
//   { name: "Sam", age: "35", skills: ["C++", "php", "Java"] },
// ];
// for (const iter of users) {
//     console.log((iter));
//     for (const iterSkills of iter.skills) {
//         console.log(iterSkills);
//     }
// };

/*- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив */
// const skillsArr = [];
// for (const iter of users) {
//     for (const iterSkills of iter.skills) {
//         skillsArr.push(iterSkills);
//     }
// };
// console.log(skillsArr);

/*- За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
 let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}]; */

// let users = [
//   { name: "vasya", age: 31, status: false, skills: ["java", "js"] },
//   { name: "petya", age: 30, status: true, skills: ["java", "js", "html"] },
//   { name: "kolya", age: 29, status: true, skills: ["mysql", "mongo"] },
//   { name: "olya", age: 28, status: false, skills: ["java", "js"] },
//   { name: "max", age: 30, status: true, skills: ["mysql", "mongo"] },
// ];
// for (const iter of users) {
//     console.log(iter);
//     for (const skillsArr of iter.skills) {
//         console.log(skillsArr);
//     }
// };

/*- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив. */
// let users = [
//   {
//     name: "vasya",
//     age: 31,
//     status: false,
//     address: {
//       city: "Lviv",
//       country: "Ukraine",
//       street: "Shevchenko",
//       houseNumber: 1,
//     },
//   },
//   {
//     name: "petya",
//     age: 30,
//     status: true,
//     address: {
//       city: "New York",
//       country: "USA",
//       street: "East str",
//       houseNumber: 21,
//     },
//   },
//   {
//     name: "kolya",
//     age: 29,
//     status: true,
//     address: {
//       city: "Budapest",
//       country: "Hungary",
//       street: "Kuraku",
//       houseNumber: 78,
//     },
//   },
//   {
//     name: "olya",
//     age: 28,
//     status: false,
//     address: {
//       city: "Prague",
//       country: "Czech",
//       street: "Paster",
//       houseNumber: 56,
//     },
//   },
//   {
//     name: "max",
//     age: 30,
//     status: true,
//     address: {
//       city: "Istanbul",
//       country: "Turkey",
//       street: "Mikar",
//       houseNumber: 39,
//     },
//   },
//   {
//     name: "anya",
//     age: 31,
//     status: false,
//     address: {
//       city: "Rio",
//       country: "Brasil",
//       street: "Ronaldi",
//       houseNumber: 5,
//     },
//   },
//   {
//     name: "oleg",
//     age: 28,
//     status: false,
//     address: {
//       city: "Montreal",
//       country: "Canada",
//       street: "Acusto",
//       houseNumber: 90,
//     },
//   },
//   {
//     name: "andrey",
//     age: 29,
//     status: true,
//     address: {
//       city: "Quebeck",
//       country: "Canada",
//       street: "Binaro",
//       houseNumber: 33,
//     },
//   },
//   {
//     name: "masha",
//     age: 30,
//     status: true,
//     address: {
//       city: "Moscow",
//       country: "Russia",
//       street: "Gogolia",
//       houseNumber: 1,
//     },
//   },
//   {
//     name: "olya",
//     age: 31,
//     status: false,
//     address: {
//       city: "Portland",
//       country: "USA",
//       street: "Forest str",
//       houseNumber: 4,
//     },
//   },
//   {
//     name: "max",
//     age: 31,
//     status: true,
//     address: {
//       city: "Cairo",
//       country: "Egypt",
//       street: "Seashore",
//       houseNumber: 45,
//     },
//   },
// ];
/*- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив. */
// const usersAdressArr = [];
// for (const iter of users) {
//     usersAdressArr.push(iter.address)
// };
// console.log(usersAdressArr);
/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці. */

// for (const iter of users) {
//     let userDiv = document.createElement('div');
//     userDiv.innerText = JSON.stringify(iter);
//     document.body.appendChild(userDiv);
// };

/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4) */
// for (const iter of users) {
//     let userDiv = document.createElement('div');
//     document.body.appendChild(userDiv);
//     for (const field in iter) {
//         let fielDiv = document.createElement('div');
//         if (field === 'address') fielDiv.innerText = 'address'
//         else fielDiv.innerText = iter[field];
//         userDiv.appendChild(fielDiv);
//     }
// };
/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
 */
// for (const iter of users) {
//     let userDiv = document.createElement('div');
//     userDiv.style.backgroundColor = 'gray';
//     userDiv.style.width = '100px';
//     userDiv.style.marginBottom = '5px';
//     document.body.appendChild(userDiv);
//     for (const field in iter) {
//         let fieldDiv = document.createElement('div');
//         if (field === 'address') {
//             console.log(iter[field]);
//             for (const iterAdress in iter[field]) {
//                 console.log(iterAdress);
//                 let adress = document.createElement('div');
//                 adress.style.backgroundColor = 'yellow'
//                 fieldDiv.appendChild(adress);
//                 adress.innerText = iter[field][iterAdress];
//             }
//         }
//         else
//         fieldDiv.innerText = iter[field];
//         userDiv.appendChild(fieldDiv);
//     }
// };

/*
- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Частковий приклад реультату:
let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....] */
// let usersWithId = [
//   { id: 1, name: "vasya", age: 31, status: false },
//   { id: 2, name: "petya", age: 30, status: true },
//   { id: 3, name: "kolya", age: 29, status: true },
//   { id: 4, name: "olya", age: 28, status: false },
// ];
// let citiesWithId = [
//   { user_id: 3, country: "USA", city: "Portland" },
//   { user_id: 1, country: "Ukraine", city: "Ternopil" },
//   { user_id: 2, country: "Poland", city: "Krakow" },
//   { user_id: 4, country: "USA", city: "Miami" },
// ];

// let usersWithCities = [
//   {
//     id: 1,
//     name: "vasya",
//     age: 31,
//     status: false,
//     address: { user_id: 1, country: "Ukraine", city: "Ternopil" },
//   },
// ];

// const usersWithCities = usersWithId.slice();
// for(const iterUserArr of usersWithId) {
//     for(const iterCity of citiesWithId) {
//         if (iterUserArr['id'] === iterCity['user_id']) iterUserArr.addres = iterCity;
//     }
// };
// console.log(usersWithCities);

/*- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу */
// let divClass = document.getElementsByClassName('block');
// console.log(divClass[0].innerText);
// let divId = document.getElementById('block');
// console.log(divId.textContent); 
// let div = document.getElementsByTagName('div');
// console.log(div[0].innerText);
/*- змінити цей текст використовуючи селектори id, class,  tag */
// divClass[0].innerText = 'Text changed by class selector!!!';
// divId.textContent = 'Text changed by id selector!!!';
// div[0].innerText = 'Text changed by tag selector!!!'

/*- змінити висоту та ширину блоку використовуючи селектори id, class,  tag */
// divClass[0].style.backgroundColor = 'red';
// divClass[0].style.height = '200px';
// divClass[0].style.width = '300px';

// divId.style.backgroundColor = 'blue';
// divId.style.height = '100px';
// divId.style.width = '350px';

// div[0].style.backgroundColor = 'pink';
// div[0].style.height = '500px';
// div[0].style.width = '100px';

/*- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені */
// let table = document.createElement('table');
// document.body.appendChild(table);
// table.style.table = '1px solid black';
// let tr = document.createElement('tr');
// table.appendChild(tr)
// table.style.border = '1px solid black';
// table.style.width = '250px';
// table.style.textAlign = 'center';
// for(let i = 1; i <=3; i++) {
//     let td = document.createElement('td');
//     tr.appendChild(td);
//     td.innerText = i
//     td.style.border = '1px solid black';
// };

/*- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені */
// let table = document.createElement('table');
// document.body.appendChild(table);
// table.style.table = '1px solid black';
// table.style.border = '1px solid black';
// table.style.width = '250px';
// table.style.textAlign = 'center';
// for(let i = 1; i <= 10; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for(let j = 1; j <=3; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//         td.innerText = `${i} ${j}`
//         td.style.border = '1px solid black';
//     };
// }

/*- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені */
// let table = document.createElement('table');
// document.body.appendChild(table);
// table.style.table = '1px solid black';
// table.style.border = '1px solid black';
// table.style.width = '250px';
// table.style.textAlign = 'center';
// for(let i = 1; i <= 10; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for(let j = 1; j <=5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//         td.innerText = `${i} ${j}`
//         td.style.border = '1px solid black';
//     };
// }

/*- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt */
// let line = prompt('Введите колличество строк');
// let column = prompt('Введите колличество столбцов');
// let table = document.createElement('table');
// document.body.appendChild(table);
// table.style.table = '1px solid black';
// table.style.border = '1px solid black';
// table.style.width = '250px';
// table.style.textAlign = 'center';
// for(let i = 1; i <= line; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for(let j = 1; j <= column; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//         td.innerText = `${i} ${j}`
//         td.style.border = '1px solid black';
//     };
// };