// - створити функцію яка виводить масив
// function logArr(arr) {
//     console.log(arr)
// };
// arr = [1, 5, 7, 10];
// logArr(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomArr() {
//     const arr = [];
//     for (let i = 0; i < 10; i++){
//         arr.push(Math.round(Math.random()* 100) )
//     };
//     logArr(arr);
// };
// randomArr();

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNum(a, b, c) {
//     if ((a <= b) && (a <= c )) {
//         console.log(a);
//         return a;
//     };
//     if ((b <= a) && (b <= c )) {
//         console.log(b);
//         return b;
//     };
//     if ((c <= a) && (c <= b )) {
//         console.log(c);
//         return c;
//     };
// };

// minNum(+prompt(), +prompt(), +prompt());

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNum(a, b, c) {
//     const numArr = [a, b, c];

//     if ((a >= b) && (a >= c )) {
//         console.log(a, numArr);
//         return a;
//     };
//     if ((b >= a) && (b >= c)) {
//         console.log(b, numArr);
//         return b;
//     };
//     if ((c >= a) && (c >= b )) {
//         console.log(c, numArr);
//         return c;
//     };
// };
// maxNum(+prompt('Введите первое число'), +prompt('Введите второе число'), +prompt('Введите третье число'));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function min(arguments) {
//     let minNum = arguments[0];
//     let maxNum = arguments[0];
//     for (const iter of arguments) {
//         if (minNum <= iter) minNum = iter;
//         if (maxNum >= iter) maxNum = iter;
//     };
//     console.log(maxNum);
//     return minNum;
// };

// const arr = [5, 458, -7, 0, 15, 24, 4, -8, 556, 19];
// console.log(min(arr));

// - створити функцію яка виводить масив
// function arrLog(arguments) {
//     console.log(arguments);
// };
// const arr = [5, 458, -7, 0, 15, 24, 4, -8, 556, 19];
// arrLog(arr)

// - створити функцію яка повертає найбільше число з масиву
// function maxNumOfArr(arguments) {
//     let maxNum = arguments[0];
//     for (const iter of arguments) {
//         if (maxNum <= iter) maxNum = iter;
//     };
//     return maxNum;
// };
// const arr = [5, 458, -7, 0, 750, 24, 4, -8, 556, 19];
// console.log(maxNumOfArr(arr))

// - створити функцію яка повертає найменьше число з масиву
// function minNumOfArr(arguments) {
//     let minNum = arguments[0];
//     for (const iter of arguments) {
//         if (minNum >= iter) minNum = iter;
//     };
//     return minNum;
// };
// const arr = [5, 458, -7, 0, 750, 24, 4, -8, 556, 19];
// console.log(minNumOfArr(arr));

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function arrNumSum(arr) {
//     let sum = 0;
//     for ( const iter of arr) {
//         sum += iter;
//     };
//     return sum;
// };
// const arr = [1, 2, 3, 4, 5, -5];
// console.log(arrNumSum(arr));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arrAverage(arr) {
//     let sum = 0;
//     for ( const iter of arr) {
//         sum += iter;
//     };
//     return sum/arr.length;
// };
// const arr = [1, 2, 3, 4, 5];
// console.log(arrAverage(arr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function arrOfObjCounter(arr) {
//     let counter = 0;
//     for (const iter of arr) {
//         if (typeof iter === 'object') counter++;
//     };
//     return counter;
// };
// const arr = [
//   { name: "Bobik", age: "2", color: "black", weight: "25kg", owner: "Robert" },
//   { name: "Tusik", age: "8", color: "white", weight: "5kg", owner: "Jim" },
//   { name: "Barbos", age: "1", color: "gray", weight: "8kg", owner: "Bob" },
//   { name: "Rex", age: "3", color: "brown", weight: "35kg", owner: "Allison" },
//   { name: "Lucky", age: "4", color: "ginger", weight: "12kg", owner: "Patrik" },
//   5,
//   'efwrf',
// ];
// console.log(arrOfObjCounter(arr));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function arrOfObjFieldCounter(arr) {
//     function objFlat(obj) {
//         for (const key in obj) {
//             typeof obj[key] === 'object' ? objFlat(obj[key]) : obj[key];
//             counter++;
//         };
//         return objFlat;
//         };

//     let counter = 0;
//     for (const iter of arr) {
//         if (typeof iter === 'object') {
//             objFlat(iter);
//         }
//     };
//     return counter;
// };
// const arr = [
//   { name: "Bobik", age: "2", color: "black", weight: "25kg", owner: "Robert" },
//   { name: "Tusik", age: "8", color: "white", weight: "5kg", owner: "Jim" },
//   { name: "Barbos", age: "1", color: "gray", weight: "8kg", owner: "Bob" },
//   { name: "Rex", age: "3", color: "brown", weight: "35kg", owner: "Allison" },
//   { name: "Lucky", age: "4", color: "ginger", weight: "12kg", owner: "Patrik" },
//   {name: {age: 25, status: true}},
//   5,
//   'efwrf',
// ];
// console.log(arrOfObjFieldCounter(arr));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// const arr1 = [1,2,3,4];
// const arr2 = [2,3,4,5];
// function arrIndexSum (arr1, arr2) {
//     let res = [];
//     for (let i = 0; i < arr1.length; i++) {
//         res.push(arr1[i] + arr2[i])
//     };
//     return res;
// };
// console.log(arrIndexSum(arr1, arr2));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// const arrIndexReplace = function (arr, index) {
//     let changer = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (i === index) {
//             changer = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = changer;
//         };
//     };
//     return arr;
// };
// const arr  = [5, 15, 7, 2, -5, 3]
// console.log(arrIndexReplace(arr, 4));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// const arrZeroSort = function (arr) {
//     for (let i = arr.length -1; i >= 0; i-- ) {
//         if (arr[i] === 0 ) {
//             arr.splice(i, 1)
//             arr.push(0);
//         };
//     };
//     return arr;
// };
// const arr1  = [1,0,6,0,3];
// const arr2  = [0,1,2,3,4];
// const arr3  = [0,0,1,0];
// const arr4  = [0, 0, 0, 0, 1, 0];
// console.log(arrZeroReplace(arr4));

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addBodyHelloOwu() {
//     let p = document.createElement('p');
//     p.innerText = 'Hello owu';
//     p.style.textAlign = 'center';
//     document.body.appendChild(p);
// };
// addBodyHelloOwu();

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addBodyHelloOwu(elemType, text) {
//     let p = document.createElement(elemType);
//     p.innerText = text;
//     p.style.textAlign = 'center';
//     document.body.appendChild(p);
// };
// addBodyHelloOwu('div', 'HELLO!!!');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
cars = [
  { brand: "Audi", model: "A8", year: 2018, color: "white", engine: 4.2 },
  { brand: "Honda", model: "Civic", year: 2008, color: "gray", engine: 1.8 },
  { brand: "Skoda", model: "Superb", year: 2007, color: "gray", engine: 1.8 },
  { brand: "Ford", model: "Focus", year: 2015, color: "blue", engine: 2 },
  { brand: "Renault", model: "Megane", year: 2013, color: "red", engine: 1.5 },
];

// function addCarArr(arr, elementId) {
//     let carList = document.getElementById(elementId);
//     for (const iter of arr) {
//         let p = document.createElement('p');
//         for (const objIter in iter) {
//             p.innerHTML += `${objIter}: ${iter[objIter]}; `;
//         }
//         carList.appendChild(p);
//     };
// };
// addCarArr(cars, 'car_list');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// function addCarArr(arr, elementId) {
//     let carList = document.getElementById(elementId);
//     let ul = document.createElement('ul');
//     carList.appendChild(ul);
//     for (const iter of arr) {
//         let li = document.createElement('li');
//         for (const objIter in iter) {
//             li.innerHTML += `${objIter}: ${iter[objIter]}; `;
//         }
//         ul.appendChild(li);
//     };
// };
// addCarArr(cars, 'car_list');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function addCarArr(arr, elementId) {
//     let carList = document.getElementById(elementId);
//     let ul = document.createElement('ul');
//     carList.appendChild(ul);
//     for (const iter of arr) {
//         let li = document.createElement('li');
//         for (const objIter in iter) {
//             let p = document.createElement('p');
//             p.innerHTML += `${objIter}: ${iter[objIter]}; `;
//             li.appendChild(p);
//         }
//         ul.appendChild(li);
//     };
// };
// addCarArr(cars, 'car_list');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

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

// function arreyOfObjConcat(userArray, citiesArr) {
//     let userArr = JSON.parse(JSON.stringify(userArray));
//     for (const userIter of userArr) {
//         for (const citiesIter of citiesArr) {
//             if (userIter['id'] === citiesIter['user_id']) {
//                 userIter.adress = citiesIter;
//             }
//         }
//     }
//     return userArr;
// }

// console.log(arreyOfObjConcat(usersWithId, citiesWithId));

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
  {
    title: "Первое правило Бойцовского клуба.",
    body: "Никому не рассказывать о Бойцовском клубе.",
  },
  {
    title: "Второе правило Бойцовского клуба.",
    body: "Никогда никому не рассказывать о Бойцовском клубе.",
  },
  {
    title: "Третье правило Бойцовского клуба.",
    body: "В схватке участвуют только двое.",
  },
  {
    title: "Четвертое правило Бойцовского клуба.",
    body: "Не более одного поединка за один раз.",
  },
  {
    title: "Пятое правило Бойцовского клуба.",
    body: "Бойцы сражаются без обуви и голые по пояс.",
  },
  {
    title: "Шестое правило Бойцовского клуба.",
    body: "Поединок продолжается столько, сколько потребуется.",
  },
  {
    title: "Седьмое правило Бойцовского клуба.",
    body:
      "Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.",
  },
  {
    title: "Восьмое и последнее правило Бойцовского клуба.",
    body: "Новичок обязан принять бой.",
  },
];
// function addRulesToHtml (rulesArr) {
//     let div = document.createElement('div');
//     document.body.insertAdjacentElement("afterbegin", div);
//     div.id = 'wrap';
//     for (let i = 0; i < rulesArr.length; i++) {
//         let divRule = document.createElement('div');
//         divRule.classList.add('rules', `rule${i+1}`)
//         let h2 = document.createElement('h2');
//         let p = document.createElement('p');
//         console.log(rulesArr[i]);
//         h2.innerHTML = `${rulesArr[i]['title']}`;
//         p.innerHTML = `${rulesArr[i]['body']}`
//         div.appendChild(divRule);
//         divRule.appendChild(h2);
//         divRule.appendChild(p);
//     };
// };
// addRulesToHtml(rules);

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// function isNumberPowTwo(num) {
//     let res = Math.sqrt(Math.abs(num));
//     if (res === 2 || num === 1 || num === 0)  return 'YES';
//     if (res < 2) return 'NO';
//     if (res > 2) return isNumberPowTwo(res);
// };
// console.log(isNumberPowTwo(16));

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// function objDeepCopy(obj) {
//   let newObJ = {};
//   function objFlat(obj) {
//     for (const key in obj) {
//       typeof key === "object" ? objFlat(obj[key]) : (newObJ[key] = obj[key]);
//     }

//     return objFlat;
//   }
//   objFlat(obj);
//   return newObJ;
// }

// let user = {
//   name: "Mark",
//   age: 25,
//   status: true,
//   adress : {
//       country : 'Ukraine',
//       street : 'Shevchenko',
//       houseNum : 5
//   },
//   wife : 'Jane'
// };
// let userCopy = objDeepCopy(user);
// console.log(userCopy);
// console.log(user);
// console.log(user === userCopy);

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

//??? Пока дошел до такого, не могу понять почему не раскрывает массив ['oops']

const arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9]
function flat(array) {
    let arr = JSON.parse(JSON.stringify(array)); // Делаем глубокое копирование, чтобы исходный массив не мутировал
    const flatArr = [];
    function flatter(arr){
        for (const iter of arr) {
            let innerValue = arr.shift(iter);
            if (typeof iter === 'object') return flatter(innerValue);
            flatArr.push(innerValue);
            if(arr.length) flatter(arr);
        };
        return flatArr;
    };
    flatter(arr);
    return flatArr;
};
const res = flat(arr);
console.log(res);
console.log(arr);



