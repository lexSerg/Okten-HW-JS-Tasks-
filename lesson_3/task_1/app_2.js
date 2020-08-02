/*Взяти файл template_2.html та працювати в ньому
- Напишіть код, який :
-- змінює колір тексту елемнту з ід main_header на будь-який інший
-- робить шириниу елементу ul 400 пікселів
-- робить шириниу всіх елементів з класом linkList шириною 50%
-- отримує текст який зберігається в елементі з класом listElement2
-- отримує всі елементи li та змінює ім колір фону на сірий
-- отримує всі елементи 'a' та додає їм клас anchor
-- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
-- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
-- отримати елементи p та змінити їм paddin на довільне значення
-- отримати елементи з класом text2 та змінити їм текст на довільне значення */

// let main_header = document.getElementById('main_header');
// main_header.style.color = 'blue';
// let ul = document.getElementsByTagName('ul');

// ul[0].style.width = '400px';
// let linkList = document.getElementsByClassName('linkList');
// for (const iter of linkList) {
// 	iter.style.width = '50%';
// };
// let listElement2 = document.getElementsByClassName('listElement2');
// let listElement2Text = listElement2[0].innerText;
// console.log(listElement2);

// let li = document.getElementsByTagName('li');
// for (const iter of li) {
// 	iter.style.backgroundColor = 'gray';
// };
// let a = document.getElementsByTagName('a');
// for (const iter of a){
// 	iter.classList.add('anchor');
// };
// for (const iter of a){
// 	if (iter.innerText === 'link3') {
// 		iter.style.fontSize = '40px'
// 	}
// };
// for (const iter of a){
// 	iter.classList.add(`element_${iter.innerText}`)
// };
// let sub_header = document.getElementsByClassName('sub-header');
// let userBgColor = prompt('Введите цвет фона');
// for(const iter of sub_header) {
// 	iter.style.backgroundColor = userBgColor;
// 	if (iter.innerText === 'content 2 segment') iter.style.color = prompt('Введите цвет текста')
// };
// let content_1 = document.getElementsByClassName('content_1');
// content_1[0].innerText = prompt('Введите текст');
// let p = document.getElementsByTagName('p');
// for(const iter of p) {
// 	iter.style.padding = '15px';
// }
// let text2 = document.getElementsByClassName('text2');
// text2[0].innerText = 'Just some text)))'

console.log('-- отримує текст який зберігається в елементі з класом listElement2');
let classElements = document.getElementsByClassName('listElement2');
console.log(classElements);

for (let element of classElements) {
    console.log(element.innerHTML);
}