/*--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
 - знайти всі елементі, які мають class
 - знайти всі параграфи ,та змінити текст на hello oktenweb!
 - знайти всі div та змінити ім колір на червоний */
 let allElem = document.querySelectorAll('*');
 let allClass = [];
 for(const iter of allElem ) {
     if(iter.hasAttribute('class')) allClass.push(iter);
 };
 console.log(allClass);

 let classes = document.querySelectorAll('[class]');
 console.log(classes);
 
 let p = document.querySelectorAll('p');
 for(const iter of p) {
     iter.innerText = 'hello oktenweb!'
 };
 let div = document.querySelectorAll('div');
 for(const iter of div) {
     iter.style.color = 'red';
 };
 

 