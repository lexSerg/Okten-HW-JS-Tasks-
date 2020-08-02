// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//    }

// function Tag(titleOfTag, action, attrs) {
//   this.titleOfTag = titleOfTag;
//   this.action = action;
//   this.attrs = attrs;
// }
// const tags = [

//   {a : {
//       title: "Тег <a> " ,
//       action:
//           "Является одним из важных элементов HTML и предназначен для создания ссылок.",
//       attrs : [
//         {
//           titleOfAttr: "download",
//           actionOfAttr: "Предлагает скачать указанный по ссылке файл.",
//         },
//         {
//           titleOfAttr: "title",
//           actionOfAttr: "Добавляет всплывающую подсказку к тексту ссылки.",
//         },
//         {
//           titleOfAttr: "target",
//           actionOfAttr:
//             "Имя окна или фрейма, куда браузер будет загружать документ.",
//         },
//       ],
//     },
//   },

//   {div : {
//     title: "Тег <div> " ,
//     action:
//         "Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ",
//     attrs : [
//       {
//         titleOfAttr: "align",
//         actionOfAttr: "Задает выравнивание содержимого тега <div>",
//       },
//       {
//         titleOfAttr: "title",
//         actionOfAttr: "Добавляет всплывающую подсказку к тексту ссылки.",
//       },
//     ],
//   },
//   },

//   {h1 : {
//     title: "Тег <h1> " ,
//     action:
//         "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. ",
//     attrs : [
//       {
//         titleOfAttr: "align",
//         actionOfAttr: "Определяет выравнивание заголовка.",
//       },
//     ],
//   },
//   },

//   {span : {
//     title: "Тег <span> " ,
//     action:
//         "предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. ",
//     attrs : [
//       {
//         titleOfAttr: "contenteditable(универсальный атрибут)",
//         actionOfAttr: "Сообщает, что элемент доступен для редактирования пользователем.",
//       },
//       {
//         titleOfAttr: "contextmenu(универсальный атрибут)",
//         actionOfAttr: "Устанавливает контекстное меню для элемента.",
//       },

//       {
//         titleOfAttr: "hidden(универсальный атрибут)",
//         actionOfAttr: "Скрывает содержимое элемента от просмотра.",
//       },
//     ],
//   },
//   },

//   {input : {
//     title: "Тег <input> " ,
//     action:
//         "Является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
//     attrs : [
//       {
//         titleOfAttr: "accept",
//         actionOfAttr: "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.",
//       },
//       {
//         titleOfAttr: "alt",
//         actionOfAttr: "Альтернативный текст для кнопки с изображением.",
//       },

//       {
//         titleOfAttr: "formaction",
//         actionOfAttr: "Определяет адрес обработчика формы.",
//       },
//     ],
//   },
//   },

//   {form : {
//     title: "Тег <form> " ,
//     action:
//         "Устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению. ",
//     attrs : [
//       {
//         titleOfAttr: "action",
//         actionOfAttr: "Адрес программы или документа, который обрабатывает данные формы. ",
//       },
//       {
//         titleOfAttr: "autocomplete",
//         actionOfAttr: "Включает автозаполнение полей формы.",
//       },

//       {
//         titleOfAttr: "target",
//         actionOfAttr: "Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.",
//       },
//     ],
//   },
//   },

//   {option : {
//     title: "Тег <option> " ,
//     action:
//         "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.",
//     attrs : [
//       {
//         titleOfAttr: "disabled",
//         actionOfAttr: "Заблокировать для доступа элемент списка.",
//       },
//       {
//         titleOfAttr: "label",
//         actionOfAttr: "Указание метки пункта списка.",
//       },

//       {
//         titleOfAttr: "value",
//         actionOfAttr: "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.",
//       },
//     ],
//   },
//   },

//   {select : {
//     title: "Тег <select> " ,
//     action:
//         "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ",
//     attrs : [
//       {
//         titleOfAttr: "autofocus",
//         actionOfAttr: "Устанавливает, что список получает фокус после загрузки страницы.",
//       },
//       {
//         titleOfAttr: "multiple",
//         actionOfAttr: "Позволяет одновременно выбирать сразу несколько элементов списка.",
//       },

//       {
//         titleOfAttr: "required",
//         actionOfAttr: "Список обязателен для выбора перед отправкой формы.",
//       },
//     ],
//   },
//   },
// ];

// let tittle = "Тег <a> ";
// let action =
//   "Является одним из важных элементов HTML и предназначен для создания ссылок.";
// let attrs = [
//   {
//     titleOfAttr: "download",
//     actionOfAttr: "Предлагает скачать указанный по ссылке файл.",
//   },
//   {
//     titleOfAttr: "title",
//     actionOfAttr: "Добавляет всплывающую подсказку к тексту ссылки.",
//   },
//   {
//     titleOfAttr: "target",
//     actionOfAttr: "Имя окна или фрейма, куда браузер будет загружать документ.",
//   },
// ];
// let aTag = new Tag(tags[0].a.title, tags[0].a.action, tags[0].a.attrs);
// let divTag = new Tag(tags[1].div.title, tags[1].div.action, tags[1].div.attrs);
// let h1Tag = new Tag(tags[2].h1.title, tags[2].h1.action, tags[2].h1.attrs);
// let spanTag = new Tag(tags[3].span.title, tags[3].span.action, tags[3].span.attrs);
// let inputTag = new Tag(tags[4].input.title, tags[4].input.action, tags[4].input.attrs);
// let formTag = new Tag(tags[5].form.title, tags[5].form.action, tags[5].form.attrs);
// let optionTag = new Tag(tags[6].option.title, tags[6].option.action, tags[6].option.attrs);
// let selectTag = new Tag(tags[7].select.title, tags[7].select.action, tags[7].select.attrs);
// const tegArr = [aTag, divTag, h1Tag, spanTag, inputTag, formTag, optionTag, selectTag];
// console.log(tegArr);
// console.log(selectTag);
// console.log(tags);

// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

// class TagClass {
//   constructor (titleOfTag, action, attrs){
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
//   };
// };
// let aTag = new TagClass(tags[0].a.title, tags[0].a.action, tags[0].a.attrs);
// let divTag = new TagClass(tags[1].div.title, tags[1].div.action, tags[1].div.attrs);
// let h1Tag = new TagClass(tags[2].h1.title, tags[2].h1.action, tags[2].h1.attrs);
// let spanTag = new TagClass(tags[3].span.title, tags[3].span.action, tags[3].span.attrs);
// let inputTag = new TagClass(tags[4].input.title, tags[4].input.action, tags[4].input.attrs);
// let formTag = new TagClass(tags[5].form.title, tags[5].form.action, tags[5].form.attrs);
// let optionTag = new TagClass(tags[6].option.title, tags[6].option.action, tags[6].option.attrs);
// let selectTag = new TagClass(tags[7].select.title, tags[7].select.action, tags[7].select.attrs);
// const tegArr = [aTag, divTag, h1Tag, spanTag, inputTag, formTag, optionTag, selectTag];
// console.log(tegArr);
// console.log(selectTag);
// console.log(tags);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let carObj = {
//   model : 'AUDI',
//   producer : 'Volkswagen Group',
//   yearOfIssue : 2015,
//   maxSpeed : 220,
//   engineVolume : 2.0,
//   drive : function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   },
//   info : function() {
//     console.log(`model : ${this.model}; producer: ${this.producer}; maxSpeed : ${this.maxSpeed}; engineVolume : ${this.engineVolume},`)
//   },
//   increaseMaxSpeed: function (newSpeed = 0) {
//     this.maxSpeed += newSpeed;
//   },
//   changeYear : function(newValue = this.yearOfIssue) {
//     this.yearOfIssue = newValue;
//   },
//   addDriver : function(driver) {
//     this.driver = driver || 'Машина без водителя';
//   }
// };
// carObj.info();
// carObj.increaseMaxSpeed(50);
// console.log(carObj.maxSpeed);
// carObj.changeYear();
// console.log(carObj.yearOfIssue);
// carObj.changeYear(2020);
// console.log(carObj.yearOfIssue);
// let driver = {
//   name : 'Tom',
//   age : 34
// };
// carObj.addDriver(driver);
// console.log(carObj);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car (model, producer, yearOfIssue, maxSpeed, engineVolume ) {
//   this.model = model;
//   this.producer = producer;
//   this.yearOfIssue = yearOfIssue;
//   this.maxSpeed = maxSpeed;
//   this.engineVolume = engineVolume;
//   this.drive = function  () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   };
//   this.info = function () {
//     console.log(`model : ${this.model}; producer: ${this.producer}; maxSpeed : ${this.maxSpeed}; engineVolume : ${this.engineVolume},`)
//   };

//   this.increaseMaxSpeed = function  (newSpeed = 0) {
//     this.maxSpeed += newSpeed;
//   };
//   this.changeYear = function (newValue = this.yearOfIssue) {
//     this.yearOfIssue = newValue;
//   };
//   this.addDriver = function  (driver) {
//     this.driver = driver || 'Машина без водителя';
//   };
// };
// let vw = new Car ('VOLKSWAGEN', 'Volkswagen Group', 2012, 200, 1.8);
// console.log(vw);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//   constructor(model, producer, yearOfIssue, maxSpeed, engineVolume) {
//   this.model = model;
//   this.producer = producer;
//   this.yearOfIssue = yearOfIssue;
//   this.maxSpeed = maxSpeed;
//   this.engineVolume = engineVolume;
//   };
//   drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//   };
//   info() {
//     console.log(`model : ${this.model}; producer: ${this.producer}; maxSpeed : ${this.maxSpeed}; engineVolume : ${this.engineVolume},`)
//   };
//   increaseMaxSpeed(newSpeed = 0) {
//     this.maxSpeed += newSpeed;
//   };
//   changeYear(newValue = this.yearOfIssue) {
//     this.yearOfIssue = newValue;
//   };
//   addDriver(driver) {
//     this.driver = driver || 'Машина без водителя';
//   };
// };
// let vw = new Car ('VOLKSWAGEN', 'Volkswagen Group', 2012, 200, 1.8);
// console.log(vw);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Human {
//   constructor(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Cinderella extends Human {
//   constructor(name, age, footSize) {
//   super(name, age)
//     this.footSize = footSize;
//   };
// };
// class Prince extends Human {
//   constructor(name, age, shoeSize){
//     super(name, age);
//     this.shoeSize = shoeSize;
//   };
//   findCinderella(arr) {
//     for (const iter of arr) {
//       if (this.shoeSize === iter.footSize) return iter;
//     }
//   };
// }
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// };
// function Prince(name, age, footSize){
//   this.name = name;
//   this.age = age;
//   this.footSize = footSize;
//   this.findCinderella = function(arr) {
//     for (const iter of arr) {
//       if (this.footSize === iter.footSize) return iter;
//     };
//   }
// };

let cinderella1 = new Cinderella("Таня", 25, 39);
let cinderella2 = new Cinderella("Аня", 23, 42);
let cinderella3 = new Cinderella("Маша", 17, 41);
let cinderella4 = new Cinderella("Вика", 32, 40);
let cinderella5 = new Cinderella("Alison", 18, 36);
let cinderella6 = new Cinderella("Клавдия Тимофеевна", 56, 47);
let cinderella7 = new Cinderella("Lucy", 20, 38);
let cinderella8 = new Cinderella("Золушка", 19, 35);
let cinderella9 = new Cinderella("Параша", 33, 37);
let cinderella10 = new Cinderella("Janifer", 29, 40);
const cinderellaArr = [
  cinderella1,
  cinderella2,
  cinderella3,
  cinderella4,
  cinderella5,
  cinderella6,
  cinderella7,
  cinderella8,
  cinderella8,
  cinderella10,
];
let prince = new Prince('Фердинанд', 19, 35);
console.log(prince);


console.log(prince.findCinderella(cinderellaArr)); 
