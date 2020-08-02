// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btnHideText = document.forms.myForm1.buttonTextHide;
btnHideText.onclick = () => {
  let h1Text = document.getElementById("text");
  h1Text ? (h1Text.style.display = "none") : false;
};

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btnHideMе = document.forms.myForm2.buttonHideMе;
btnHideMе.onclick = () => {
  btnHideMе.style.visibility = "hidden";
};

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let btnAgeVerification = document.forms.myForm3.buttonAgeVerification;
btnAgeVerification.onclick = () => {
  if (!Number(document.forms.myForm3.inputAge.value)) alert("Enter valid data");
  else
    Number(document.forms.myForm3.inputAge.value) < 18
      ? alert("You are under 18!!!!")
      : alert("Welcome to our page");
};

//- Создайте меню, которое раскрывается/сворачивается при клике
let btnDropDownToggle = document.forms.myForm4.buttonDropDownMenu;
toggleVisuallyList = (el) => {
  for (const iter of el) {
    if (iter === "visually-hidden") {
      el.remove("visually-hidden");
      return;
    }
  }
  el.add("visually-hidden");
};
btnDropDownToggle.onclick = () => {
  let dropDownCars = document.getElementsByClassName("dropDownCarsMenu");
  toggleVisuallyList(dropDownCars[0].classList);
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentList = [
  {
    method: "Метод every()",
    description:
      "Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.",
  },
  {
    method: "Метод findIndex()",
    description:
      "Возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.",
  },
  {
    method: "Метод splice() ",
    description:
      "Изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.",
  },
  {
    method: "Метод Array.of()",
    description:
      "Создаёт новый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа или типа аргумента.",
  },
  {
    method: "Метод Array.from()",
    description:
      "Cоздаёт новый экземпляр Array из массивоподобного или итерируемого объекта.",
  },
];
let prevEl = document.querySelector(".dropDownCarsMenu"); //берем предыдущий елемент
createCommentList = (list, el) => {
  const btnArr = [];
  let ul = document.createElement("ul");
  el.insertAdjacentElement("afterend", ul);
  ul.classList.add("comment-list");
  ul.style.listStyle = "none";
  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    for (const iterObj in list[i]) {
      let h1 = document.createElement("h1");
      if (iterObj === "method") {
        let h1 = document.createElement("h1");
        h1.innerText = `${list[i][iterObj]}`;
        li.appendChild(h1);
        let btn = document.createElement("button");
        let btnName = document.createTextNode("Скрыть описание");
        btn.appendChild(btnName);
        btnArr.push(btn);
        li.appendChild(btn);
      }
      if (iterObj === "description") {
        let p = document.createElement("p");
        p.innerText = `${list[i][iterObj]}`;
        p.id = `comment${i + 1}`;
        li.appendChild(p);
      }
    }
    ul.appendChild(li);
  }
  return btnArr;
};

buttonCommentIventsAdd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = () => {
      let elem = document.querySelector(`#comment${i + 1}`);
      if (elem.classList.contains("visually-hidden")) {
        elem.classList.remove("visually-hidden");
        arr[i].innerText = "Скрыть описание";
        return;
      }
      elem.classList.add("visually-hidden");
      arr[i].innerText = "Раскрыть описание";
    };
  }
};
buttonCommentIventsAdd(createCommentList(commentList, prevEl));

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let btnFormsShow = document.querySelector("#forms-data-show");
btnFormsShow.onclick = () => {
  let form1Text = document.forms.myForm5.text.value;
  let form1Radio = document.forms.myForm5.radio;
  let form2Text = document.forms.myForm6.text.value;
  let form2Radio = document.forms.myForm6.radio;
  console.log(form1Text, form1Radio, form2Text, form2Radio);
};

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// !При возможности доделать для большего кол-ва элементов, и настроить плавность перехода
document.forms.formTableGenerator.tr.onclick = () => {
  document.forms.formTableGenerator.tr.value = "";
};
document.forms.formTableGenerator.td.onclick = () => {
  document.forms.formTableGenerator.td.value = "";
};
document.forms.formTableGenerator.elType.onclick = () => {
  document.forms.formTableGenerator.elType.value = "";
};
document.forms.formTableGenerator.tdText.onclick = () => {
  document.forms.formTableGenerator.tdText.value = "";
};
getFormTableGeneratorData = () => {
  trNum = Math.abs(parseInt(document.forms.formTableGenerator.tr.value));
  tdNum = Math.abs(parseInt(document.forms.formTableGenerator.td.value));
  if (!tdNum || !trNum) {
    alert("Enter valid value");
    return null;
  }
  tdText = document.forms.formTableGenerator.tdText.value;
  tdText === "undefined"
    ? (document.forms.formTableGenerator.tdText.value = "")
    : tdText;
  eltype = document.forms.formTableGenerator.elType.value; // !!! Тут возможны ошибки. т.к. проверку элемента не делал, пока руки не доходят
  return [trNum, tdNum, tdText, eltype];
};
tableGenerator = (trNum, tdNum, tdText, eltype) => {
  let prevEl = document.getElementById("btnTableGenerator");
  let htmlEl = document.createElement(eltype);
  let table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.width = "400px";
  table.style.height = "400px";
  for (let i = 1; i <= trNum; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let i = 1; i <= tdNum; i++) {
      let td = document.createElement("td");
      td.innerText = tdText;
      td.style.border = "1px solid black";
      tr.appendChild(td);
    }
  }
  htmlEl.appendChild(table);
  prevEl.insertAdjacentElement("afterend", htmlEl);
};
btnTableGenerator.onclick = () => {
  if (getFormTableGeneratorData()) {
    let [trNum, tdNum, eltype] = getFormTableGeneratorData();
    tableGenerator(trNum, tdNum, eltype);
  }
};
//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let btnLeft = document.querySelector("#btnCaruselLeft");
const rightImgList = [];
btnLeft.onclick = () => {
  let currentImg = document.querySelector(".current-img");
  let newCurrentImg = document.querySelector(".carusel-img-toright");
  console.log(currentImg);
  console.log(newCurrentImg);
  if (newCurrentImg) {
    currentImg.classList.add("carusel-img-toleft");
    currentImg.classList.remove("current-img");
    newCurrentImg.classList.add("current-img");
    newCurrentImg.classList.remove("carusel-img-toright");
    console.log(currentImg, newCurrentImg);
  }
};

let btnRight = document.querySelector("#btnCaruselRight");
const leftImgList = [];
btnRight.onclick = () => {
  let currentImg = document.querySelector(".current-img");
  let newCurrentImg = document.querySelector(".carusel-img-toleft");
  console.log(currentImg);
  console.log(newCurrentImg);
  if (newCurrentImg) {
    currentImg.classList.add("carusel-img-toright");
    currentImg.classList.remove("current-img");
    newCurrentImg.classList.add("current-img");
    newCurrentImg.classList.remove("carusel-img-toleft");
    console.log(currentImg, newCurrentImg);
  }
};

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
const obsceneWords = [
  "кака",
  "бяка",
  "бука",
  "фу",
  "ай-ай-ай",
  "ой",
  "ай",
  "ох",
  "ух",
  "фух",
  "фу-фу",
];
document.forms.FormObsceneWords.text.onclick = () => {
  document.forms.FormObsceneWords.text.value = "";
};
let btnCheckObsceneWords = document.getElementById("btnObsceneCheck");
// let checkWord = (word, arr) => arr.some((value) => value === word);

// btnCheckObsceneWords.onclick = () => {
//   if (checkWord(document.forms.FormObsceneWords.text.value, obsceneWords))
//     alert("Do not swear in the chat!!!");
// };

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

//! Работает только для разделителя через пробел
let checkStr = (str, arr) => {
  str = str.split(" ");
  for (const iter of str) {
    if (arr.some((value) => value === iter)) {
      return iter;
    }
  }
};
btnCheckObsceneWords.onclick = () => {
  if (checkStr(document.forms.FormObsceneWords.text.value, obsceneWords))
    alert("Do not swear in the chat!!!");
};

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
(function rulesSubmenu() {
  const h2Arr = document.querySelectorAll(".rules h2");
  const content = document.getElementById("content");
  const wrap = document.getElementById("wrap");
  const ul = document.createElement("ul");
  ul.style = "list-style: none; position: absolute; right: 5%;";
  for (let i = 0; i < h2Arr.length; i++) {
    const li = document.createElement("li");
    li.innerText = h2Arr[i].innerText;
    const a = document.createElement("a");
    let anchore = `anchore${i + 1}`;
    h2Arr[i].id = anchore;
    a.setAttribute("href", `#${anchore}`);
    content.appendChild(ul);
    ul.appendChild(a);
    a.appendChild(li);
  }
})();

// -- взять массив пользователей
let usersWithAddress = [
  {
    id: 1,
    name: "vasya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 2,
    name: "petya",
    age: 30,
    status: true,
    address: { city: "Kyiv", street: "Shevchenko", number: 1 },
  },
  {
    id: 3,
    name: "kolya",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 121 },
  },
  {
    id: 4,
    name: "olya",
    age: 28,
    status: false,
    address: { city: "Ternopil", street: "Shevchenko", number: 90 },
  },
  {
    id: 5,
    name: "max",
    age: 30,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 115 },
  },
  {
    id: 6,
    name: "anya",
    age: 31,
    status: false,
    address: { city: "Kyiv", street: "Shevchenko", number: 2 },
  },
  {
    id: 7,
    name: "oleg",
    age: 28,
    status: false,
    address: { city: "Ternopil", street: "Shevchenko", number: 22 },
  },
  {
    id: 8,
    name: "andrey",
    age: 29,
    status: true,
    address: { city: "Lviv", street: "Shevchenko", number: 43 },
  },
  {
    id: 9,
    name: "masha",
    age: 30,
    status: true,
    address: { city: "Kyiv", street: "Shevchenko", number: 12 },
  },
  {
    id: 10,
    name: "olya",
    age: 31,
    status: false,
    address: { city: "Lviv", street: "Shevchenko", number: 16 },
  },
  {
    id: 11,
    name: "max",
    age: 31,
    status: true,
    address: { city: "Ternopil", street: "Shevchenko", number: 121 },
  },
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
class User {
  constructor(users) {
    this.users = users;
  }
  getUserWithFalseStatusArr(users = this.users) {
    return users.filter((value) => !value.status);
  }
  getUserWithAge29yearsMoreArr(users = this.users) {
    return users.filter((value) => value.age >= 29);
  }
  getUserWithAdressKiev(users = this.users) {
    return users.filter((value) => value.address.city === "Kyiv");
  }
}
let usersWithMethod = new User(usersWithAddress);
console.log(usersWithMethod.getUserWithAge29yearsMoreArr());
console.log(usersWithMethod);
function addUserArrToDocument(arr) {
  const ul = document.createElement("ul");
  for (const iter of arr) {
    let li = document.createElement("li");
    for (const iterObj in iter) {
      if (typeof iter[iterObj] === "object") {
        for (const iterInnerObj in iter[iterObj]) {
          li.innerText += `${iterInnerObj} : ${iter[iterObj][iterInnerObj]}; `;
        }
      } else li.innerText += `${iterObj} : ${iter[iterObj]}; `;
    }
    ul.appendChild(li);
  }
  inputUserSortedArrBtn.insertAdjacentElement("afterend", ul);
}

let inputUserSortedArrBtn = document.getElementById("inputUserSortedArrBtn");
inputUserSortedArrBtn.onclick = () => {
  if (
    !document.forms.filteredForm.falseStatus.checked &&
    !document.forms.filteredForm.more29.checked &&
    !document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(usersWithMethod.users);
  if (
    document.forms.filteredForm.falseStatus.checked &&
    !document.forms.filteredForm.more29.checked &&
    !document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(usersWithMethod.getUserWithFalseStatusArr());
  if (
    !document.forms.filteredForm.falseStatus.checked &&
    document.forms.filteredForm.more29.checked &&
    !document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(usersWithMethod.getUserWithAge29yearsMoreArr());
  if (
    !document.forms.filteredForm.falseStatus.checked &&
    !document.forms.filteredForm.more29.checked &&
    document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(usersWithMethod.getUserWithAdressKiev());
  if (
    document.forms.filteredForm.falseStatus.checked &&
    document.forms.filteredForm.more29.checked &&
    !document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(
      usersWithMethod.getUserWithAge29yearsMoreArr(
        usersWithMethod.getUserWithFalseStatusArr()
      )
    );
  if (
    document.forms.filteredForm.falseStatus.checked &&
    !document.forms.filteredForm.more29.checked &&
    document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(
      usersWithMethod.getUserWithAdressKiev(
        usersWithMethod.getUserWithFalseStatusArr()
      )
    );
  if (
    !document.forms.filteredForm.falseStatus.checked &&
    document.forms.filteredForm.more29.checked &&
    document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(
      usersWithMethod.getUserWithAdressKiev(
        usersWithMethod.getUserWithAge29yearsMoreArr()
      )
    );
  if (
    document.forms.filteredForm.falseStatus.checked &&
    document.forms.filteredForm.more29.checked &&
    document.forms.filteredForm.FromKiev.checked
  )
    addUserArrToDocument(
      usersWithMethod.getUserWithFalseStatusArr(
        usersWithMethod.getUserWithAdressKiev(
          usersWithMethod.getUserWithAge29yearsMoreArr()
        )
      )
    );
};
// *Делал функции через обьект, т.к. хотел сделать чтоб методы вызывались цепочкой, но т.к. возвращаеться просто массив, так сделать не получаеться. Чтоб так сделать скорее всего нужно вернуть результирующий массив в поле обьекта, и тогда можно будет сдеать цепочкой. Короче говоря не докрутил, + где-то перемудрил, и в итоге получилось так. Стало жалко удалять, решил оставить уже как есть. Понимаю, что в итоге г..нокод получился(((

  // *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
  // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
  // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
  // Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
