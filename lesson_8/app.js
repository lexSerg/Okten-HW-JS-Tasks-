// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// (function textareaSinсhWithLocalStorage () {
//     let textarea = document.forms.textareaForm.someText.value;
//     console.log(textarea);
//     localStorage.setItem('textarea', textarea);
//     textarea = localStorage.getItem('textarea');
// })();
let textarea = document.getElementById("simpleTextarea");
textarea.value = localStorage.getItem("textarea");
textarea.oninput = (ev) => {
  localStorage.setItem("textarea", ev.target.value);
};

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
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
let formDateObj = {};
setFormData = (el) => {
  el = el.target;
  if (el.type === "checkbox")
    el.checked ? (el.value = true) : (el.value = false);
  if (el.type === "radio")
    el.id === "radio1" && el.checked
      ? (el.value = true)
      : (el.value = false);
  if (el.type === "radio")
    el.id === "radio2" && el.checked
      ? (el.value = false)
      : (el.value = true);
  localStorage.setItem(el.name, el.value);
  formDateObj[el.name] = el.name;
  localStorage.setItem('Form Data', JSON.stringify(formDateObj))
};

getFormData = () => {
  let form = document.forms.form1;
  for (let i = 0; i < form.elements.length; i++) {
    if (localStorage.hasOwnProperty(form.elements[i].name))
      form.elements[i].value = localStorage.getItem(form.elements[i].name);
    if (form.elements[i].type === "checkbox")
      if (form.elements[i].value === "true")
        form.elements[i].setAttribute("checked", "checked");

    if (form.elements[i].type === "radio")
      if (form.elements[i].id === "radio1" && form.elements[i].value === "true")
        form.elements[i].setAttribute("checked", "checked");
      else if (
        form.elements[i].id === "radio2" &&
        form.elements[i].value === "false"
      )
        form.elements[i].setAttribute("checked", "checked");
  };
};
getFormData();
document.forms.form1.oninput = (ev) => {
  setFormData(ev);
};

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
