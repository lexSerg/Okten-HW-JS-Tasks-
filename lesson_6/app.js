// // - создать массив с 20 числами.
// // -- при помощи метода sort и колбека  отсортировать массив.
// const arrNum = [
//   1, -15, 22, -124, 5, 0, 346, 27, 9, -3, 450, 21, 100, 5, -8, 8, 64, 33, -15, 2
// ];
// const sortedIncreaseArr = arrNum.slice().sort((a,b) => a - b);
// console.log(sortedIncreaseArr);
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// const sortedDecreaseArr = arrNum.slice().sort((a,b) => b - a);
// console.log(sortedDecreaseArr);
// console.log(arrNum, 'Исходный массив');
// // -- при помощи filter получить числа кратные 3
// const arrDivisibleByThree = arrNum.filter(value => !(value % 3));
// console.log(arrDivisibleByThree);
// // -- при помощи filter получить числа кратные 10
// const arrDivisibleByTen = arrNum.filter(value => !(value % 10));
// console.log(arrDivisibleByTen);
// //-- перебрать (проитерировать) массив при помощи foreach()
// arrNum.forEach((value, index) => console.log(value, 'index= ' + index));
// //-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// const arrMultipleTree = arrNum.map(value => value * 3);
// console.log(arrMultipleTree, 'Arr value * 3');
// console.log(arrNum, 'Исходный массив');

// - создать массив со словами на 15-20 элементов.
// const strArr = [
//   'Вася', 'Петя', 'Агафон', 'Борода', 'Patrik', 'паровоз', 'Jon', 'яблоко', 'Ярослав', 'Alex', 'Sindy', 'дом', 'World', 'apple', 'js', 'погода', 'заноза', 'css', 'фонтан', 'якорь'
// ];
// console.log(strArr, '___Исходный массив___');
// // -- отсортировать его по алфавиту в восходящем порядке.
// const strSortedIncreaseArr = strArr.slice().sort((a, b) => a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt() );
// console.log(strSortedIncreaseArr);
// // -- отсортировать его по алфавиту  в нисходящем порядке.
// const strSortedDecreaseArr = strArr.slice().sort((a, b) => b.toLowerCase().charCodeAt() - a.toLowerCase().charCodeAt() );
// console.log(strSortedDecreaseArr);
// // -- отфильтровать слова длиной менее 4х символов
// const arrFilteredStr = strArr.filter(value => !(value.length < 4));
// console.log(arrFilteredStr);
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const arrChangeVal = strArr.map(value => value + '!');
// console.log(arrChangeVal);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
let users = [
  { name: "vasya", age: 31, status: false },
  { name: "petya", age: 30, status: true },
  { name: "kolya", age: 29, status: true },
  { name: "olya", age: 28, status: false },
  { name: "max", age: 30, status: true },
  { name: "anya", age: 31, status: false },
  { name: "oleg", age: 28, status: false },
  { name: "andrey", age: 29, status: true },
  { name: "masha", age: 30, status: true },
  { name: "olya", age: 31, status: false },
  { name: "max", age: 31, status: true },
];
// const userAgeIncreaseSorted = users.slice().sort((a, b) => a.age - b.age);
// console.log(userAgeIncreaseSorted);
// const userAgeDecreaseSorted = users.slice().sort((a, b) => b.age - a.age);
// console.log(userAgeDecreaseSorted);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const userNameIncreaseSorted = users.slice().sort((a, b) => a.name.length - b.name.length);
// console.log(userNameIncreaseSorted);
// const userNameDecreaseSorted = users.slice().sort((a, b) => b.name.length - a.name.length);
// console.log(userNameDecreaseSorted);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// const userArrWithId = JSON.parse(JSON.stringify(users));
// userArrWithId.map((value, index) => value.id = index);
// console.log(userArrWithId);
// console.log(users);
// // - відсортувати його за індентифікатором
// const userIdDecreaseSorted = userArrWithId.slice().sort((a, b) => b.id - a.id);
// console.log(userIdDecreaseSorted);
// // -- наисать функцию калькулятора с 2мя числами и колбеком
// function twoNumCalculate(num1, num2, callback) {
//   return callback(num1, num2);
//  };
//  const res1 = twoNumCalculate(1, 5, (num1, num2) => {
//    return num1 + num2;
// });
// console.log(res1)
// // -- наисать функцию калькулятора с 3мя числами и колбеком
// function threeNumCalculate(num1, num2, num3, callback) {
//   return callback(num1, num2, num3);
//  };
//  const res2 = threeNumCalculate(1, 5, 4, (num1, num2, num3) => {
//    return num1 + num2 + num3;
// });
// console.log(res2)

// let cars = [
//   {
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400,
//   },
//   {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250,
//   },
//   {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300,
//   },
//   {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140,
//   },
//   {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200,
//   },
//   {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165,
//   },
//   {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120,
//   },
//   {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350,
//   },
//   {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180,
//   },
//   {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400,
//   },
//   {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230,
//   },
// ];
// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// const treeLitersVolumeArr = cars.filter(value => value.volume > 3);
// console.log(treeLitersVolumeArr);
// // - двигун = 2л
// const twoLitersVolumeArr = cars.filter(value => value.volume === 2);
// console.log(twoLitersVolumeArr);
// // - виробник мерс
// const mercedesArr = cars.filter(value => value.producer === "mercedes");
// console.log(mercedesArr);
// // - двигун більше 3х літрів + виробник мерседес
// const mercedesArrBigVolume = cars.filter(value => value.producer === "mercedes" && value.volume > 3);
// console.log(mercedesArrBigVolume);
// // - двигун більше 3х літрів + виробник субару
// const subaruArrBigVolume = cars.filter(value => value.producer === "subaru" && value.volume > 3);
// console.log(subaruArrBigVolume);
// // - сили більше ніж 300
// const arrPower300More = cars.filter(value => value.power > 300);
// console.log(arrPower300More);
// // - сили більше ніж 300 + виробник субару
// const subaruArrPower300More = cars.filter(value => value.power > 300 && value.producer === "subaru");
// console.log(subaruArrPower300More);
// // - мотор серіі ej
// const ejEngineArr = cars.filter(value => value.engine.startsWith('ej'));
// console.log(ejEngineArr);
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// const uniqSubaruArr = cars.filter(value => value.engine.startsWith('ej') && value.producer === "subaru" && value.power > 300);
// console.log(uniqSubaruArr);
// // - двигун меньше 3х літрів + виробник мерседес
// const mercedesTreeLitersLessVolume = cars.filter(value => value.volume < 3 && value.producer === "mercedes");
// console.log(mercedesTreeLitersLessVolume);
// // - двигун більше 2л + сили більше 250
// const twoLitersMoreAndPowerMore250Arr = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(twoLitersMoreAndPowerMore250Arr);
// // - сили більше 250  + виробник бмв
// const bmw250PowerMoreArr = cars.filter(value => value.producer === 'bmw' && value.power > 250);
// console.log(bmw250PowerMoreArr);

// console.log(cars, '_______Исходный массив cars______');

// // - взять слдующий массив
// let usersWithAddress = [
//   {
//     id: 1,
//     name: "vasya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 16 },
//   },
//   {
//     id: 2,
//     name: "petya",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 1 },
//   },
//   {
//     id: 3,
//     name: "kolya",
//     age: 29,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 121 },
//   },
//   {
//     id: 4,
//     name: "olya",
//     age: 28,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 90 },
//   },
//   {
//     id: 5,
//     name: "max",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 115 },
//   },
//   {
//     id: 6,
//     name: "anya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 2 },
//   },
//   {
//     id: 7,
//     name: "oleg",
//     age: 28,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 22 },
//   },
//   {
//     id: 8,
//     name: "andrey",
//     age: 29,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 43 },
//   },
//   {
//     id: 9,
//     name: "masha",
//     age: 30,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 12 },
//   },
//   {
//     id: 10,
//     name: "olya",
//     age: 31,
//     status: false,
//     address: { city: "Lviv", street: "Shevchenko", number: 16 },
//   },
//   {
//     id: 11,
//     name: "max",
//     age: 31,
//     status: true,
//     address: { city: "Lviv", street: "Shevchenko", number: 121 },
//   },
// ];
// // -- отсортировать его по id пользователей
// const usersWithAddressIncreaseSortedId = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort((a, b) => a.id - b.id);
// console.log(usersWithAddressIncreaseSortedId);
// // -- отсортировать его по id пользователей в обратном опрядке
// const usersWithAddressDecreaseSortedId = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort((a, b) => b.id - a.id);
// console.log(usersWithAddressDecreaseSortedId);
// // -- отсортировать его по возрасту пользователей
// const usersWithAddressIncreaseSortedAge = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort((a, b) => a.age - b.age);
// console.log(usersWithAddressIncreaseSortedAge);
// // -- отсортировать его по возрасту пользователей в обратном порядке
// const usersWithAddressDecreaseSortedAge = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort((a, b) => b.age - a.age);
// console.log(usersWithAddressDecreaseSortedAge);
// // -- отсортировать его по имени пользователей
// const usersWithAddressSortedName = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort(
//   (a, b) => {
//     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//     if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;
//   }
// );
// console.log(usersWithAddressSortedName);
// // -- отсортировать его по имени пользователей в обратном порядке
// const usersWithAddressDecreaseSortedName = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort(
//   (a, b) => {
//     if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
//     if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
//     if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;
//   }
// );
// console.log(usersWithAddressDecreaseSortedName);
// // -- отсортировать его по названию улицы  в алфавитном порядке
// const usersWithAddressSortedStreet = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort(
//   (a, b) => {
//     if (a.address.street.toLowerCase() < b.address.street.toLowerCase()) return -1;
//     if (a.address.street.toLowerCase() > b.address.street.toLowerCase()) return 1;
//     if (a.address.street.toLowerCase() === b.address.street.toLowerCase()) return 0;
//   }
// );
// console.log(usersWithAddressSortedStreet);
// // -- отсортировать его по номеру дома по возрастанию
// const usersWithAddressSortedHoseNum = JSON.parse(
//   JSON.stringify(usersWithAddress)
// ).sort((a, b) => a.address.number - b.address.number);
// console.log(usersWithAddressSortedHoseNum);
// // -- отфильтровать (оставить) тех кто младше 30
// const usersWithAddressFilteredAge = usersWithAddress.filter(value => value.age < 30);
// console.log(usersWithAddressFilteredAge);
// // -- отфильтровать (оставить) тех у кого отрицательный статус
// const usersWithAddressFilteredStatus = usersWithAddress.filter(value => !value.status);
// console.log(usersWithAddressFilteredStatus);
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// const usersWithAddressFilteredStatusAndAge = usersWithAddress.filter(value => !value.status && value.age < 30);
// console.log(usersWithAddressFilteredStatusAndAge);
// // -- отфильтровать (оставить) тех у кого номер дома четный
// const usersWithAddressFilteredHomeNum = usersWithAddress.filter(value => !(value.address.number % 2));
// console.log(usersWithAddressFilteredHomeNum);
// console.log(usersWithAddress, "__________Исходный массив____________");

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// class Car {
//   constructor(model, enginePower, owner, cost, yearOfIssue) {
//     this.model = model;
//     this.enginePower = enginePower;
//     this.owner = owner;
//     this.cost = cost;
//     this.yearOfIssue = yearOfIssue;
//   }
//   increasePower() {
//     this.enginePower += this.enginePower * 0.1;
//   }
// }
// let car1 = new Car(
//   "BMW",
//   200,
//   { name: "Вася", age: 45, drivingExperience: 20 },
//   17000,
//   2017
// );
// let car2 = new Car(
//   "Porshe",
//   300,
//   { name: "Игорь", age: 20, drivingExperience: 2 },
//   40000,
//   2019
// );
// let car3 = new Car(
//   "ВАЗ",
//   100,
//   { name: "Олег", age: 31, drivingExperience: 10 },
//   2000,
//   1998
// );
// let car4 = new Car(
//   "BMW",
//   250,
//   { name: "Алексей", age: 27, drivingExperience: 4 },
//   15000,
//   2015
// );
// let car5 = new Car(
//   "Nissan",
//   210,
//   { name: "Светлана", age: 24, drivingExperience: 2 },
//   9000,
//   2014
// );
// let car6 = new Car(
//   "Kia",
//   170,
//   { name: "Влад", age: 29, drivingExperience: 4 },
//   5000,
//   2010
// );
// let car7 = new Car(
//   "Газ",
//   150,
//   { name: "Владимир Петрович", age: 54, drivingExperience: 33 },
//   4500,
//   1989
// );
// let car8 = new Car(
//   "WV",
//   150,
//   { name: "Игорь", age: 37, drivingExperience: 15 },
//   5500,
//   2007
// );
// let car9 = new Car(
//   "Камаз",
//   550,
//   { name: "Кибир Мамедович", age: 51, drivingExperience: 30 },
//   20000,
//   2001
// );
// let car10 = new Car(
//   "Audi",
//   150,
//   { name: "Виктория", age: 37, drivingExperience: 10 },
//   9000,
//   2009
// );
// let car11 = new Car(
//   "Зайчик",
//   0.1,
//   { name: "Павлуша", age: 7, drivingExperience: 1 },
//   100,
//   2010
// );
// let car12 = new Car(
//   "Lexus",
//   320,
//   { name: "Андрей", age: 34, drivingExperience: 12 },
//   29000,
//   2015
// );
// let car13 = new Car(
//   "Nissan",
//   180,
//   { name: "Дмитрий", age: 25, drivingExperience: 3 },
//   6000,
//   2012
// );
// let car14 = new Car(
//   "Opel",
//   190,
//   { name: "Игорь", age: 33, drivingExperience: 7 },
//   5000,
//   2010
// );
// let car15 = new Car(
//   "Cheri",
//   130,
//   { name: "Юрий", age: 36, drivingExperience: 12 },
//   4000,
//   2009
// );
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// const carsArr = [
//   car1,
//   car2,
//   car3,
//   car4,
//   car5,
//   car6,
//   car7,
//   car8,
//   car9,
//   car10,
//   car11,
//   car12,
//   car13,
//   car14,
//   car15,
// ];

// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// // ??? const carsArrCopy = JSON.parse(JSON.stringify(carsArr)); Данное копирование не копирует методы обьектов. Копию хотел сделать т.к. метод increasePower() меняет поля обьектов исходного массива. Как оставить оригинальную копию массива пока не разобрался.
// const carsArrIncreasedPower = carsArr.map((value, index) => {
//   if (index < 8) value.increasePower();
//   return value;
// });
// console.log(carsArr);
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// carsArr[0].owner = {name: "Piter", age: 29, drivingExperience: 3 };
// carsArr[1].owner = {name: "James", age: 49, drivingExperience: 19 };
// carsArr[2].owner = {name: "Jon", age: 22, drivingExperience: 3 };
// carsArr[3].owner = {name: "Alice", age: 44, drivingExperience: 22 };
// carsArr[4].owner = {name: "Alex", age: 29, drivingExperience: 5 };
// carsArr[5].owner = {name: "Sam", age: 48, drivingExperience: 20 };
// carsArr[6].owner = {name: "Lucy", age: 19, drivingExperience: 1 };
// carsArr[7].owner = {name: "Katrin", age: 26, drivingExperience: 4 };

// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// const powerAndConstIncreese = (arr) => {
//   for (let i = 0; i < arr.length; i = i + 2) {
//     arr[i].enginePower += arr[i].enginePower * 0.1;
//     arr[i].cost += arr[i].cost * 0.05
//   };
//   return arr;
// };
// console.log(powerAndConstIncreese(carsArr));

// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// const revisionDriverExperience = (arr) => {
//   for (const iter of arr) {
//     if(iter.owner.drivingExperience < 5 && iter.owner.age > 25) iter.owner.drivingExperience = iter.owner.drivingExperience + 1;
//   };
//   return arr;
// };
// revisionDriverExperience(carsArr);
// console.log(carsArr);
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// const totalCarsArrCost = (arr) => {
//   let totalCost = 0;
//   for (const iter of arr) {
//     totalCost += iter.cost;
//   };
//   return `Общая стоимость всех машин ${totalCost}$`;
// };
// console.log(totalCarsArrCost(carsArr));

// // Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// // Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// // Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// // Пример:
// // Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.

// const arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 10];
// const getMinMaxElementIndex = (arr, elem) => {
//   const minElemIndex = arr.indexOf(elem) ;
//   const maxElemIndex = arr.lastIndexOf(elem);
//   if (minElemIndex && maxElemIndex && minElemIndex !== -1)
//     return `Min element index = ${minElemIndex} Max element index = ${maxElemIndex}`;
//   return -1;
// };
// console.log(getMinMaxElementIndex(arr, 4));
