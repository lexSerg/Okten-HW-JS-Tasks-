// // - Дана textarea.
// // В неё вводится текст.
// // Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// (function textareaSinсhWithLocalStorage() {
//   let textarea = document.forms.textareaForm.someText.value;
//   // console.log(textarea);
//   textarea = localStorage.getItem("textarea");
// })();
// let textarea = document.getElementById("simpleTextarea");
// textarea.value = localStorage.getItem("textarea");
// textarea.oninput = (ev) => {
//   localStorage.setItem("textarea", ev.target.value);
// };
// textarea.onclose = () => {
//   textarea = localStorage.getItem("textarea");
//   console.log(textarea);
// };

// // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // Сделайте ваш скрипт как можно более универсальным.
// let name = document.forms.form1.name.value;
// let age = document.forms.form1.age.value;
// let addedInfo = document.forms.form1.textComment.value;
// let isMarried = document.forms.form1.isMarried.checked;
// let isSmoking = document.forms.form1.smoking.checked;
// let color = document.forms.form1.select.value;
// let isDeveloper = document.forms.form1.isDeveloper;
// let form = document.forms.form1;
// form.oninput = (ev) => {
//   for (let i = 0; i < form.elements.length; i++) {
//     console.log(form.elements[i]);
//     if (form[i].type === "checkbox")
//       form[i].checked ? (form[i].value = true) : (form[i].value = false);
//     if (form[i].type === "radio")
//       form[i].id === "radio1" && form[i].checked
//         ? (form[i].value = true)
//         : (form[i].value = false);
//     if (form[i].type === "radio")
//       form[i].id === "radio2" && form[i].checked
//         ? (form[i].value = false)
//         : (form[i].value = true);
//     localStorage.setItem(form[i].name, form[i].value);
//   }
// };
// getFormData = () => {
//   for (let i = 0; i < form.elements.length; i++) {
//     if (localStorage.hasOwnProperty(form.elements[i].name))
//       form.elements[i].value = localStorage.getItem(form.elements[i].name);
//     if (form.elements[i].type === "checkbox")
//       if (form.elements[i].value === "true")
//         form.elements[i].setAttribute("checked", "checked");

//     if (form.elements[i].type === "radio")
//       if (form.elements[i].id === "radio1" && form.elements[i].value === "true")
//         form.elements[i].setAttribute("checked", "checked");
//       else if (
//         form.elements[i].id === "radio2" &&
//         form.elements[i].value === "false"
//       )
//         form.elements[i].setAttribute("checked", "checked");
//   }
// };
// let formDateObj = {};
// setFormData = (el) => {
//   el = el.target;
//   if (el.type === "checkbox")
//     el.checked ? (el.value = true) : (el.value = false);
//   if (el.type === "radio")
//     el.id === "radio1" && el.checked ? (el.value = true) : (el.value = false);
//   if (el.type === "radio")
//     el.id === "radio2" && el.checked ? (el.value = false) : (el.value = true);
//   localStorage.setItem(el.name, el.value);
//   formDateObj[el.name] = el.name;
//   localStorage.setItem("Form Data", JSON.stringify(formDateObj));
// };

// getFormData = () => {
//   let form = document.forms.form1;
//   for (let i = 0; i < form.elements.length; i++) {
//     if (localStorage.hasOwnProperty(form.elements[i].name))
//       form.elements[i].value = localStorage.getItem(form.elements[i].name);
//     if (form.elements[i].type === "checkbox")
//       if (form.elements[i].value === "true")
//         form.elements[i].setAttribute("checked", "checked");

//     if (form.elements[i].type === "radio")
//       if (form.elements[i].id === "radio1" && form.elements[i].value === "true")
//         form.elements[i].setAttribute("checked", "checked");
//       else if (
//         form.elements[i].id === "radio2" &&
//         form.elements[i].value === "false"
//       )
//         form.elements[i].setAttribute("checked", "checked");
//   }
// };
// getFormData();
// document.forms.form1.oninput = (ev) => {
//   setFormData(ev);
// };

// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// const textareaWithHistory = document.getElementById("textareaWithHistory");
// const btnTextareaSave = document.getElementById("btnTextareaSave");
// const btnLeft = document.getElementById("btnLeft");
// const btnRight = document.getElementById("btnRight");

// btnTextareaSave.onclick = () => {
//   if (!localStorage.hasOwnProperty("textareaWithHistory")) {
//     console.log("First Element");
//     let item = textareaWithHistory.value;
//     item = JSON.stringify([item]);
//     localStorage.setItem("textareaWithHistory", item);
//     return;
//   }
//   console.log(localStorage.getItem("textareaWithHistory"));
//   let item = JSON.parse(localStorage.getItem("textareaWithHistory"));
//   item.push(textareaWithHistory.value);
//   localStorage.setItem("textareaWithHistory", JSON.stringify(item));
// };
// btnLeft.onclick = () => {
//   btnRight.style = "visibility : visible";
//   let item = JSON.parse(localStorage.getItem("textareaWithHistory"));
//   for (let i = 0; i < item.length; i++) {
//     if (item[i] === textareaWithHistory.value) {
//       if (i === 0) {
//         btnLeft.style = "visibility : hidden";
//         return;
//       } else {
//         btnLeft.style = "visibility : visible";
//         textareaWithHistory.value = item[i - 1];
//         return;
//       }
//     }
//   }
//   textareaWithHistory.value = item[item.length - 1];
// };

// btnRight.onclick = () => {
//   btnLeft.style = "visibility : visible";
//   let item = JSON.parse(localStorage.getItem("textareaWithHistory"));
//   for (let i = 0; i < item.length; i++) {
//     if (item[i] === textareaWithHistory.value) {
//       if (i === item.length - 1) {
//         btnRight.style = "visibility : hidden";
//         return;
//       } else {
//         btnRight.style = "visibility : visible";
//         textareaWithHistory.value = item[i + 1];
//         return;
//       }
//     }
//   }
//   textareaWithHistory.value = item[0];
// };
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const form = document.forms.NoteBookForm;
const save = document.getElementById("save");
const noteContainer = document.getElementById("note_container");
const container = document.getElementById('noteBookContainer')
const NoteBookFormKey = "NOTE_BOOK";
console.dir(container);
save.onclick = (ev) => {
  ev.preventDefault();
  let person = {};
  for (let i = 0; i < form.children.length; i++) {
    const elem = form.children[i];
    if (elem.id !== "save" && elem.name) {
      person[elem.name] = elem.value;
    }
  }
  person.id = new Date().getTime();
  saveUser(person);
  getUsersFromNotes();
};
const saveUser = (user) => {
  if (localStorage.hasOwnProperty(NoteBookFormKey)) {
    const localUser = JSON.parse(localStorage.getItem(NoteBookFormKey));
    let isContain = localUser.find((value) => value.id === user.id);
    if (isContain) {
       localUser.filter(value => value.id !== user.id)
       console.log("Pfvtyztv");
    } else {
      localUser.push(user);
      localStorage.setItem(NoteBookFormKey, JSON.stringify(localUser));
    }
  } else localStorage.setItem(NoteBookFormKey, JSON.stringify([user]));
};
const getUsersFromNotes = () => {
  const users = JSON.parse(localStorage.getItem(NoteBookFormKey));
  for (const iter of users) {
    creatUsersCard(iter);
  }
};
const creatUsersCard = (user) => {
  console.dir(container);
  let card = document.createElement("div");
  for (const key in user) {
    let p = document.createElement("p");
    p.innerText = `${key} : ${user[key]}`;
    card.appendChild(p);
  }
  card.style =
    "border : 1px solid black; width : 300px; float: left; text-align : center; margin : 2px ";
  form.insertAdjacentElement("afterend", noteBookContainer);
  noteBookContainer.appendChild(card);
  const del = document.createElement('button');
  const edit = document.createElement('button');
  del.style = 'margin-right : 5px'
  del.innerText = 'Delite';
  edit.innerText = 'Edit';
  card.appendChild(del);
  card.appendChild(edit);
  del.onclick = function () {
    deleteUser(user.id)
  };
  edit.onclick = function () {
    deleteUser(user.id)
  }
};

deleteUser = (id) => {
  const users = JSON.parse(localStorage.getItem(NoteBookFormKey));
  const fiteredUsers = users.filter(value => value.id !== id);
  localStorage.setItem(NoteBookFormKey, JSON.stringify(fiteredUsers));
  location.reload(true)
}