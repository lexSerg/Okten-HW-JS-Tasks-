/*-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу*/
// let dog = {
//     name: "Bobik",
//     color: "black",
//     weight: "25kg",
//     age: 3,
//     owner: "Robert",
//   },
//   person = {
//     name: "Bil",
//     age: 32,
//     weight: "82kg",
//     job: "developer",
//     interest: ["music", "boxing"],
//   },
//   car = {
//     brand: "Audi",
//     model: "A8",
//     age: 1,
//     color: "white",
//     engine: 4.2,
//   },
//   flat = {
//     place: "Barselona",
//     garage: true,
//     area: 75,
//     sleeping_places: 3,
//     floor: 5,
//   },
//   book = {
//     title: "Harry Potter and the Philosopher's Stone ",
//     author: "J.K. Rowling",
//     pages: 368,
//     year: 2012,
//     publishing_house: "Bloomsbury Children's",
//   };

/* 	
	-- Створити масив та вивести його в консоль:
	- з 5 собак
	- 3 5 людей
    - з 5 автомобілів */
// const
//  dogs = [
//   { name: "Bobik", age: "2", color: "black", weight: "25kg", owner: "Robert" },
//   { name: "Tusik", age: "8", color: "white", weight: "5kg", owner: "Jim" },
//   { name: "Barbos", age: "1", color: "gray", weight: "8kg", owner: "Bob" },
//   { name: "Rex", age: "3", color: "brown", weight: "35kg", owner: "Allison" },
//   { name: "Lucky", age: "4", color: "ginger", weight: "12kg", owner: "Patrik" },
// ],
//  person = [
//      {name: "Bill", age: 32, weight: 85, height: 185, job: "developer",},
//      {name: "Andrew", age: 12, weight: 40, height: 152, job: "schoolboy",},
//      {name: "Richard", age: 52, weight: 76, height: 175, job: "pensioner",},
//      {name: "Silvia", age: 27, weight: 62, height: 172, job: "designer",},
//      {name: "Harry", age: 13, weight: 79, height: 180, job: "student",},
// ],
//  cars = [
//     {brand: "Audi", model: "A8", year: 2018, color: "white", engine: 4.2,},
//     {brand: "Honda", model: "Civic", year: 2008, color: "gray", engine: 1.8,},
//     {brand: "Skoda", model: "Superb", year: 2007, color: "gray", engine: 1.8,},
//     {brand: "Ford", model: "Focus", year: 2015, color: "blue", engine: 2,},
//     {brand: "Renault", model: "Megane", year: 2013, color: "red", engine: 1.5,},
// ];
// console.log(dogs, person, cars);

/*-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
	- будинок
	- водій
	- іграшку
	- стіл
    - сумка */
    
// let 
//     house = {
//         place : 'Kiyv',
//         total_area : 350,
//         rooms_number : 7, 
//         household_appliances : ['dishwasher', 'washer', 'fridge', 'stove'],
//         other : {
//             garage : true,
//             gymnasium : false, 
//             alcove : true,
//             mantelpiece : true,
//             swimming_pool : false
//         }
//     },
//     driver = {
//         name : 'Roman',
//         age : 42,
//         isMarried : true,
//         category : ['B', 'B1', 'C', 'C1', 'D'],
//         other : {
//             smoking : true,
//             isHeadInjuries : true,
//             drivingExperience : 20
//         }
//     },
//     game = {
//         name : 'BabyHit Mercedes Benz',
//         color : 'red',
//         accumulator : '12V',
//         weight: 19.8,
//         isRadioControl : true,
//         power_reserve: '4.3km',
//         alternative_colors : ['blue', 'yellow', 'green', 'pink', 'black'],
//         proportions : {
//             width : 638,
//             height : 630,
//             length : 1220
//         },
//     },

//     table = {
//         form_type : 'straight',
//         materials : 'chipboard',
//         color : 'black and white',
//         proportions : {
//             width : 1200,
//             height: 750,
//             depth : 600,
//         },
//         particular_qualities: ['lamination slick', 'extendable keyboard shelf', 'Curved worktop' ]

//     },
//     chair = {
//         color: 'black',
//         producer: 'Turkey',
//         base_type: 'on legs',
//         materials: ['plastic', 'wood', 'cloth'],
//         proportions : {
//             width : 570,
//             height: 870,
//             length_Depth : 610,
//             landing_height: 460
//         }
//     },

/*Дан массив:
	let users = [
					{name: 'vasya', age: 31, status: false},
					{name: 'petya', age: 30, status: true},
					{name: 'kolya', age: 29, status: true},
					{name: 'olya', age: 28, status: false},
					{name: 'max', age: 30, status: true},
					{name: 'anya', age: 31, status: false},
					{name: 'oleg', age: 28, status: false},
					{name: 'andrey', age: 29, status: true},
					{name: 'masha', age: 30, status: true},
					{name: 'olya', age: 31, status: false},
					{name: 'max', age: 31, status: true}
				];
	- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
	- статус Андрія
	- статус Максима
	- ім'я передостаннього об'єкту
	- ім'я третього об'єкта
	- вік Олега
	- вік Олі
	- вік + ім'я 5го об'єкта
	- вік + сатус Анни
    Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3! */
    // let users = [
    //     {name: 'vasya', age: 31, status: false},
    //     {name: 'petya', age: 30, status: true},
    //     {name: 'kolya', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'anya', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andrey', age: 29, status: true},
    //     {name: 'masha', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true}
    // ];
    // console.log('статус Андрія: ',users[7].status);
    // console.log('статус Максима: ',users[users.length-1].status);
    // console.log('ім\'я передостаннього об\'єкту: ',users[users.length-2].name);  
    // console.log('ім\'я третього об\'єкта: ',users[2].name);     
    // console.log('вік Олега: ',users[6].age); 
    // console.log('вік Олі: ',users[users.length-2].age); 
    // console.log(`вік 5го об'єкта: ${users[4].age};  ім'я 5го об'єкта: ${users[4].name}`); 
    // console.log(`вік Анни: ${users[5].age};  Статус Анни: ${users[5].status}`); 
    