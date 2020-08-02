/* 	--створити масив та вивести його в консоль:
	- з 5 числових значень
	- з 5 стічкових значень
	- з 5 значень стрічкового, числового та булевого типу
    -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль */
    
// const arrNum = [5, 8, 7, 55, -41];
// const arrStr = ['Mike', 'Lisa', 'Bob', 'Sam', 'Jenifer'];
// const arrMix = ['Boston', 21, true, 'apple', false];
// console.log(arrNum, arrStr, arrMix);
// const arrEmpty = [];
// arrEmpty[0] = 'First element';
// arrEmpty.push('Second element');
// arrEmpty[2] = 'blablabla';
// console.log(arrEmpty);
// arrEmpty[2] = 'Third element';
// console.log(arrEmpty);

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Some text</div>');
// };
/* 	- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині */
// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>Some text_${i}</div>`);
// };

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. */
// let iter = 0;
// while(iter < 20) {
//     document.write('<h1>Some headline</h1>');
//     iter++;
// };

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині. */
// let iter = 1;
// while(iter < 21) {
//     document.write(`<h1>Some headline_${iter}</h1>`);
//     iter++;
// };

/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// };

/* 	- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі. */
// const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// };

/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. */
// const arr = ['one', 2, 'three', 4, 'five', 6, 'seven', 8, 'nine', 10];
// for (const iter of arr){
//     console.log(iter);
// };

/* 	- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи */
// const arr = ['one', 2, true, 4, 'five', 6, 'seven', false, 'nine', 10];
// for (const iter of arr){
//     if(typeof iter === 'boolean') console.log(iter);
// };

/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи */
// const arr = ['one', 2, true, 4, 'five', 6, 'seven', false, 'nine', 10];
// for (const iter of arr){
//     if(typeof iter === 'number') console.log(iter);
// };

/* 	- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи */
// const arr = ['one', 2, true, 4, 'five', 6, 'seven', false, 'nine', 10];
// for (const iter of arr){
//     if(typeof iter === 'string') console.log(iter);
// };

/* 	- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі. */
// const arr = [];
// arr[0] = 15;
// arr[1] = false;
// arr[2] = 'Element';
// arr[3] = null;
// arr[4] = -452.48;
// arr[5] = undefined;
// arr[6] = 'false';
// arr[7] = [true];
// arr[8] = 'juiсe';
// arr[9] = 21;
// for(const iter of arr) {
//     console.log(iter);
// }

/* 	- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
// for(let i = 1; i <=10; i++) {
//     console.log(`Step №${i}`);
//     document.write((`<h1>Step №${i}</h1>`))
// };

/*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
// for(let i = 1; i <=100; i++) {
//     console.log(`Step №${i}`);
//     document.write((`<h1>Step №${i}</h1>`))
// };

/* 	- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write */
// for(let i = 2; i <=200; i=i+2) {
//     console.log(`Step №${i}`);
//     document.write((`<h1>Step №${i}</h1>`))
// };

/* 	- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write */
// for(let i = 2; i <=200; i=i+2) {
//     console.log(`Step №${i}`);
//     document.write((`<h1>Step №${i}</h1>`))
// };

/* Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write */
// for(let i = 1; i <=200; i=i+2) {
//     console.log(`Step №${i}`);
//     document.write((`<h1>Step №${i}</h1>`))
// };

/*- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди) */
// for (let i = 0; i < 2; i++){
//     console.log(i, ' минут')
//     for (let j = 0; j < 60; j++){
//         console.log(j, ' секунд')
//     }
// }

// for (let i = 0; i < 11; i++){
//     console.log(i, ' минут')
//     for (let j = 0; j < 60; j++){
//         console.log(j, ' секунд')
//         if (i === 10 && j === 25) break;
//     }
// };


/* 	- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди) */
// for(let h = 0; h <= 2; h++){
//     console.log(h, ' часов')
//     for (let m = 0; m < 60; m++){
//         if((h === 2) && (m === 20)) {
//         console.log(`${h} часов ${m} минут `);
//         break;}
//         console.log(m, ' минут')
//         for (let sec = 0; sec < 60; sec++){
//             // console.log(sec, ' секунд');
//         }
//     }
// }

/* 	Додатково
	- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
	- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
	- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
    - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. */
    
    // const arr = [ 'a', 'b', 'c'];
    // let res = '';
    // for(let i = 0; i < arr.length; i++){
    //     res += arr[i]; 
    // }
    // console.log(res);

    // const arr = [ 'a', 'b', 'c'];
    // let res = '';
    // let i = 0
    // while(i < arr.length){
    //     res += arr[i]; 
    //     i++;
    // }
    // console.log(res);

    // const arr = [ 'a', 'b', 'c'];
    // let res = '';
    // for(const iter of arr ){
    //     res += iter; 
    // }
    // console.log(res);
    
    // const arr = [ 'a', 'b', 'c'];
    // let res = arr.join('');
    // console.log(res);

/* 	- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу. */
    // const arr = ['a', 'b', 'c'];
    // let count = 1; 
    // for(let i = 0; i < arr.length; i++) {
    //     arr[i] += count;
    //     count++;
    // }
    // console.log(arr);

    // const arr = ['a', 'b', 'c'];
    // let count = 1; 
    // for(let i = 1; i <= 3; i++) {
    //     arr.push(i);
    // }
    // console.log(arr);


/* 	- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]. */
// const arr = [1, 2, 3];
// const resArr = []
// for(let i = arr.length -1; i >= 0; i--) {
//     resArr.push(arr[i])
// }
// console.log(resArr);

/*- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6. */
// const arr = [1, 2, 3];
// const newArr = [4,5,6];
// for(let iter of newArr) {
//     arr.push(iter)
// }
// console.log(arr);

/*- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6. */

// const arr = [1, 2, 3];
// const newArr = [4,5,6];
// for(let iter of newArr) {
//     arr.unshift(iter)
// }
// console.log(arr);

/*- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift() */
// const arr = ['js', 'css', 'jq'];
// let firsElem = arr.shift();
// console.log(firsElem);

/*- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop() */
// const arr = ['js', 'css', 'jq'];
// let firsElem = arr.pop();
// console.log(firsElem);

/* 	- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]. */
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(3)
// console.log(newArr);

/* 	- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]. */
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(0,2)
// console.log(newArr);

/*- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5]. */
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);

/*- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3,0,'a', 'b', 'c' );
// console.log(arr);

/*- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. */
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a', 'b')
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними. */
// const arr = [1, 5, 8, 4, 12, 0, -5, -12, 7, 242]
// for(const iter of arr) {
//     if ((iter !== 0) && (iter % 2 === 0)) console.log(iter);
// }

/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший */
// const arr = [1, 5, 8, 4, 12, 0, -5, -12, 7, 242];
// const resArr = [];
// for(const iter of arr) {
//     resArr.push(iter);
// };
// console.log(resArr);

/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший. */
// const arr = [1, 5, 8, 4, 12, 0, -5, -12, 7, 242];
// const resArr = arr.slice();
// console.log(resArr);

/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: 
1. перебрати його циклом while*/
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let iter = 0;
// while(iter < arr.length) {
//     console.log(arr[iter]);
//     iter++;
// };

/*2. перебрати його циклом for */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

/* 	3. перебрати циклом while та вивести  числа тільки з непарним індексом */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let iter = 0;
// while(iter < arr.length) {
//     if ((iter === 0 ) || (iter % 2 !== 0)) console.log(arr[iter]);
//     iter++;
// };
// console.log(arr);

/*4. перебрати циклом for та вивести  числа тільки з непарним індексом */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < arr.length; i++) {
//     if ((i === 0 ) || (i % 2 !== 0)) console.log(arr[i]);
// };

/* 	5. перебрати циклом while та вивести  числа тільки парні  значення */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < arr.length) {
//     if ((arr[i] !== 0 ) && (arr[i] % 2 === 0)) console.log(arr[i]);
//     i++;
// };
// console.log(arr);

/*6. перебрати циклом for та вивести  числа тільки парні  значення */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(const iter of arr) {
//     if ((iter !== 0 ) && (iter % 2 === 0)) console.log(iter);
// };

/*7. замінити кожне число кратне 3 на слово "okten" */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < arr.length; i++) {
//     if ((arr[i] !== 0 ) && (arr[i] % 3 === 0)) {
//     arr[i] = 'okten';
// };
// console.log(arr);}

/*8. вивести масив в зворотньому порядку. */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i]);
// };

/*9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) */
// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i])
//     if ((arr[i] !== 0 ) && (arr[i] % 3 === 0)) {
//     arr[i] = 'okten';
// };
// console.log(arr);
// };

// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = arr.length-1; i >= 0; i--) {
//     if ((arr[i] !== 0 ) && (arr[i] % 2 === 0)) console.log(arr[i]);
// };

// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length-1;
// while(i >= 0) {
//     if ((arr[i] !== 0 ) && (arr[i] % 2 === 0)) console.log(arr[i]);
//     i--;
// };
// console.log(arr);

// const arr = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = arr.length-1; i >= 0; i--) {
//     if ((i === 0 ) || (i % 2 !== 0)) console.log(arr[i]);
// };

// const arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = arr.length-1;
// while(i >= 0) {
//     if ((arr[i] !== 0 ) && (arr[i] % 2 === 0)) console.log(arr[i]);
//     i--;
// };
// console.log(arr);

/*10
	 створити пустий масив та :
	- заповнити його 50 парними числами за допомоги циклу.
    - заповнити його 50 непарними числами за допомоги циклу. */
    
    // const arrEvenNum = [];
    // for(let i = 2; i <= 100; i += 2) {
    //     arrEvenNum.push(i);
    // };
    // console.log(arrEvenNum);

    // const arrOddNum = [];
    // for(let i = 1; i < 100; i += 2) {
    //     arrOddNum.push(i);
    // };
    // console.log(arrOddNum);

/*  3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)*/   
    // const arr = [];
    // for(let i = 1; i <= 100; i++) {
    //     arr.push(Math.round(Math.random() * 724 + 8)) 
    // };
    // console.log(arr)
/* 2. вывести на консоль  каждый третий елемент */  
// let count = 0; 
// for(const iter of arr) { 
//     if (count >= 3) {
//     console.log(iter);
//     count = 0;
//     }
//     count++;
// };
//Или  так:
// for(let i = 2; i < 100; i += 3) { 
//     console.log(arr[i]);
// };

/* 3. вывести на консоль  каждый третий елемент
     но при условии что его значение является парным. */
    //  for(let i = 2; i < 100; i += 3) { 
    //     if (arr[i] % 2 === 0)  console.log(arr[i]);
    // };

/* 4. вывести на консоль  каждый третий елемент
	 но при условии что он имеет парное значение и
     записать их в другой массив. */
    // const newArr = [];
    // for(let i = 2; i < 100; i += 3) { 
    //     if (arr[i] % 2 === 0)  {
    //     console.log(arr[i]);
    //     newArr.push(arr[i])
    //     }
    // };
    // console.log(newArr);
/* 	 5. Вывести каждый елемент массива у которого соседний с права элемент - парный */
// for(let i = 0; i < 100; i++) {
//     if(arr[i+1] % 2 === 0) console.log(arr[i]);
// };

/*5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек. */
// const arrPurchase = [100,250,50,168,120,345,188];
// const numPurchase = arrPurchase.length; 
// let totalValue = 0;
// for(const iter of arrPurchase) {
//     totalValue += +iter;
// }
// const middlePurchaseCost = Math.round(totalValue / numPurchase);
// console.log(`Колличество покупок: ${numPurchase}`);
// console.log(`Стоимсоть всех покупок: ${totalValue}`);
// console.log(`Средняя стоимость 1 покупки: ${middlePurchaseCost}`);


/*3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив. */

    // const arr = [];
    // const someArr = [];
    // for(let i = 1; i <= 10; i++) {
    //     arr.push(Math.round(Math.random() * 10)) 
    // };
    // for(const iter of arr) {
    //     someArr.push(iter * 5)
    // };
    // console.log(someArr);

/* 	4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
     додати його в інший масив. */
     
    // const arr = [15, true, 'apple', -47, NaN, undefined, 'orange', '8', 0, false, -Infinity];
    // const newAarr = [];
    // for(const iter of arr) {
    //     if (typeof iter === 'number') newAarr.push(iter); 
    // }
    // console.log(newAarr);

// 