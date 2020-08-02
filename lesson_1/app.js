/* 1)- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write */

// let hello = "hello",
//   owu = "owu",
//   com = "com",
//   ua = "ua",
//   one = 1,
//   ten = 10,
//   num1 = -999,
//   num2 = 123,
//   pi = 3.14,
//   num3 = 2.7,
//   num4 = 16,
//   isTrue = true;
// const arr = [hello, owu, com, ua, one, ten, num1, num2, pi, num3, num4, isTrue];
// for(let iter of arr) {
//     console.log(iter);
//     alert(iter);
//     document.write(iter);
// };

/* 2) - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write */
// hello = 'hi',
// owu = "OWU",
// com = ".com",
// ua = ".ua",
// one = '1',
// ten = '10',
// num1 = -958,
// num2 = 321,
// pi = '3.14',
// num3 = 2.47,
// num4 = 14,
// isTrue = false;
// const arr1 = [hello, owu, com, ua, one, ten, num1, num2, pi, num3, num4, isTrue];
// for(let iter of arr1) {
//     console.log(iter);
//     alert(iter);
//     document.write(iter);
// }

/* 3) - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write */

// const number1 = 5, number2 = 15.478, number3 = -4578;
// const str1 = 'Вася', str2 = 'Петя', str3 = 'грустный Ларри';
// const arr = [number1, number2, number3, str1, str2, str3];
// for (let iter of arr) {
//     console.log(iter);
//     alert(iter);
//     document.write(iter);
// }


/* 4) - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write */

// let name = prompt('Введите ваше имя');
// let surname = prompt('Введите вашу фамилию');
// let patronymic = prompt('Введите ваше отчество');
// const nameArr = [name, surname, patronymic];
// for (let iter of nameArr) {
//     console.log(iter);
//     alert(iter);
//     document.write(iter);
// }

// /*5) - Взять переменные из задания 4 и сконкатенировать их в одной переменной person. */
// person = nameArr.join(' '); 
// concatPerson = `${name} ${surname} ${patronymic} `;
// console.log(person, concatPerson );

/*  6) - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи. */


/* 7) - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль. */
// let num1 = +prompt('Введите число 1');
// let num2 = +prompt('Введите число 2');
// let num3 = +prompt('Введите число 3');
// console.log(num1, num2, num3);

/* 8) - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера */

// let num1 = parseInt(prompt('Введите число 1'), 10); 
// let num2 = parseInt(prompt('Введите число 2'), 10); 
// let num3 = parseInt(prompt('Введите число 3'), 10); 
// let num4 = parseInt(prompt('Введите число 4'), 10); 
// let result = num1 + num2 + num3 + num4;
// console.log(result);

/* 9)  при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера*/

// let num1 = parseFloat(prompt('Введите число 1'), 10); 
// let num2 = parseFloat(prompt('Введите число 2'), 10); 
// let num3 = parseFloat(prompt('Введите число 3'), 10); 
// let result = num1 + num2 + num3;
// console.log(result);

/* 10) - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера */
// let num1 = Math.round(parseFloat(prompt('Введите число 1'), 10)); 
// let num2 = Math.round(parseFloat(prompt('Введите число 2'), 10));
// let num3 = Math.round(parseFloat(prompt('Введите число 3'), 10));
// let result = num1 + num2 + num3;
// console.log(result);

/* 11) при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.*/
// let num = Math.round(parseFloat(prompt('Введите число'), 10));
// let pow = Math.round(parseFloat(prompt('Введите степень'), 10));
// let result = Math.pow(num, pow);
// console.log(result);

/* 12) При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined; */
// let a = 100, b = '100', c = true, d = undefined;
// console.log(typeof a, typeof b, typeof c, typeof d)

/*13) 	- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
	 В одинаковых выражениях в задании не использовать два одинаковых оператора.
	Каждое выражение вложить в свою переменную
	    5 ? 6 -> true
	    5 ? 6 -> false
	    5 ? 6 -> false
	    5 ? 6 -> false
	    10 ? 10 -> true
	    10 ? 10 -> true
	    10 ? 10 -> false
	    10 ? 10 -> false
	    10 ? 10 -> false
	    123 ? '123' -> false
        123 ? '123' -> true */

        // let res = 5 < 6;
        // console.log('5 ? 6 -> true ','Знак: \'<\' ', res);
        // res = 5 > 6;
        // console.log('5 ? 6 -> false ',' Знак: \'>\' ', res);
        // res = 5 === 6;
        // console.log('5 ? 6 -> false ',' Знак: \'===\' ', res);
        // res = 5 >= 6;
        // console.log('5 ? 6 -> false ',' Знак: \'>=\' ', res);
        // res = 10 === 10;
        // console.log('10 ? 10 -> true ',' Знак: \'===\' ', res);
        // res = 10 == 10;
        // console.log('10 ? 10 -> true ',' Знак: \'==\' ', res);
        // res = 10 !== 10;
        // console.log('10 ? 10 -> false',' Знак: \'!==\' ', res);
        // res = 10 > 10;
        // console.log('10 ? 10 -> false',' Знак: \'>\' ', res);
        // res = 10 < 10;
        // console.log('10 ? 10 -> false',' Знак: \'<\' ', res);
        // res = 123 === '123';
        // console.log('123 ? \'123\' -> false',' Знак: \'===\' ', res);
        // res = 123 == '123';
        // console.log('123 ? \'123\' -> true',' Знак: \'==\' ', res);

/* 	Дополнительно:
	- Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
 	console.log(132 > 100 && 45 < 12 );
	console.log(34 > 33 && 23 < 90 );
	console.log(99 > 100 && 45 > 12 );
	console.log(132 > 100 || 45 < 12 );
	console.log(111 > 11 || 45 < 111 );
	console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
	console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
	console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
	console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
	console.log(!!'-1');
	console.log(!!-1);
	console.log(!!'0');
	console.log(!!'null');
	console.log(!!'undefined');
	console.log(!!(3/'owu'));
	console.log((111 > 11 || 45 < 111) ||  !!'0');
	console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
     */ 
    // console.log(132 > 100 && 45 < 12 );
    // console.log(34 > 33 && 23 < 90 );
    // console.log(99 > 100 && 45 > 12 );
    // console.log(132 > 100 || 45 < 12 );
    // console.log(111 > 11 || 45 < 111 );
    // console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
    // console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
    // console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
    // console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
    // console.log(!!'-1');
    // console.log(!!'0');
    // console.log(!!'null');
    // console.log(!!'undefined');
    // console.log(!!(3/'owu'));
    // console.log((111 > 11 || 45 < 111) ||  !!'0');
    // console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));



/* ------------CLASS--------------- */
/* 	1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
      При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean. */
    //   let str = 'Привет', num = 123, flag = true, txt = 'true';
    //   console.log(str, typeof str);
    //   console.log(num, typeof num);
    //   console.log(flag, typeof flag);
    //   console.log(txt, typeof txt);

/*  	2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
	    5 + 3,
	    5 - 3,
	    5 * 3,
	    5 / 3,
	    5 % 3
        поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3. */
        // let a1 = 5 + 3;
        // let a2 = 5 - 3;
        // let a3 = 5 * 3;
        // let a4 = 5 / 3;
        // let a5 = 5 % 3;
        // console.log(a1, a2, a3, a4, a5);

 /* 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
	    5 % 3,
	    3 % 5,
	    5 + '3',
	    '5' - 3,
        75 + 'кг'*/
        
        // let a6 = 5 % 3;
        // let a7 = 3 % 5;
        // let a8 = 5 + '3';
        // let a9 = 5 - '3';
        // let a10 = 75 + 'кг';
        // console.log(a6, a7, a8, a9, a10);      

/* 	4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
      шириной 10см (переменная width), значение площади должно хранится в числовой переменной s. */        
    
    //   let height = 23;
    //   let width = 10;
    //   let s = height * width;
    //   console.log(`Площадь треугольника равна: ${s}см\u00B2`)

/* 	5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
    результат поместите в переменную v. */
    //   let heightC = 10;
    //   let dC = 4;
    //   let v = heightC * dC;
    //   console.log(`Площадь треугольника равна: ${v}м\u00B2`)

/*6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
      Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ). */    
      
    //   let n = 3;
    //   let m = 4;
    //   let k = Math.sqrt(n**2 + m**2);
    //   console.log(`Гипотенуза равна: ${k}`);

/* 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log */
// let str = "Hello world";
// document.write(str);
// alert(str);
// console.log(str);

/* 	8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n). */
// alert('Сергиенко Александр \n 28 лет \n кинология')

/*	9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
	  Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
	  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
      Вывести в документ содержимое переменной concatenation спомощью document.write */
    //   let str1 = 'Кто', str2 = 'ты', str3 = 'такой?'; 
    //   let concatenation = `${str1} ${str2} ${str3}`
    //   document.write(concatenation);

/* 	10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
	    let str = "20";
	     let a = 5;
	     document.write(str + a + "<br/>");
	     document.write(str - a + "<br/>");
	     document.write(str * "2" + "<br/>");
         document.write(str / 2 + "<br/>"); 
         Потому что JS во всех случаях преобразовует данные к одному типу в неявном виде в зависимости от ситуации используя определенные правила
         */
         
        //  let str = "20";
	    //  let a = 5;
	    //  document.write(str + a + "<br/>");
	    //  document.write(str - a + "<br/>");
	    //  document.write(str * "2" + "<br/>");
        //  document.write(str / 2 + "<br/>");
         
/* 	11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
	    parseInt("3.14")
	    parseInt("-7.875")
	    parseInt("435")
	    parseInt("Вася")
	 */
    // console.log(parseInt("3.14"));
    // console.log(parseInt("-7.875"));
    // console.log(parseInt("435"));
    // console.log(parseInt("Вася"));
    
/* 	12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
	    let str = prompt("Enter something", "ho-ho")
	    console.log(str); */ 
        // let str = prompt("Enter something", "ho-ho")
	    // console.log(str); 

/* 	13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert */
//    alert((+prompt("Enter number")) + (+prompt("Enter number")));

/*14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
          Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert */
    // let name = prompt('Введите ваше имя', 'Иван');
    // let surname = prompt('Введите вашу фамилию', 'Иванов');
    // let age = prompt('Сколько вам полных лет?', 18);
    // let res = `Доброго вечера ${name} ${surname}, мои поздравления что вам ${age}`;
    // alert(res);

/* 	=====================
	======ДОП============
	=====================
	
*/
	
/*	1. Три різних числа вводяться через prompt().
    За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню) */
    let num1 = +prompt('Введите число 1');
    let num2 = +prompt('Введите число 2');
    let num3 = +prompt('Введите число 3');

    // if ((num1 >= num2) && (num1 >= num3)) 
    // {if (num2 >= num3) console.log(num3, num2, num1)
    // else console.log(num2, num3, num1)}

    //     else if ((num2 >= num1) && (num2 >= num3)) 
    // {if (num1 >= num3) console.log(num3, num1, num2)
    // else console.log( num1, num3, num2)}

    //     else if ((num3 >= num1) && (num3 >= num2)) 
    // {if (num1 >= num2) console.log(num2, num1, num3)
    // else console.log(num1, num2, num3)}

    // if (num1 >= num2 && num1 >= num3 && num2 >= num3) console.log(num3, num2, num1);
    // if (num1 >= num2 && num1 >= num3 && num3 >= num2) console.log(num2, num3, num1);
    // if (num2 >= num1 && num2 >= num3 && num1 >= num3) console.log(num3, num1, num2);
    // if (num2 >= num1 && num2 >= num3 && num3 >= num1) console.log(num1, num3, num2);
    // if (num3 >= num1 && num3 >= num2 && num2 >= num1) console.log(num1, num2, num3);
    // if (num3 >= num1 && num3 >= num2 && num1 >= num2) console.log(num2, num1, num3);


    /*2.
	Все параматры получаем с клавиатуры!!!!
	Имитируем поведение пешехода на перекстке.
	Если светофор зеленый - вывести "иди".
	Если светофор желтый - вывести "подожди".
	Если светофор красный - вывести "стой".
    Если светофор в аварийном режиме вывести "делай что хочешь"!*/
    // let color = prompt('Введите цвет на светофоре');
    // switch (color) {
    //     case 'красный':
    //       alert("стой");
    //       break;
    //     case 'зеленый':
    //       alert("иди");
    //       break;
    //     case 'желтый':
    //       alert("подожди");
    //       break;
    //     default: alert("делай что хочешь");
    // };

   /* 3
	Все параметры получаем с клавиатуры!!!!(prompt , confirm)
	Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
	Улучшаем предыдущее задание.
	Если светофор зеленый и машин нет - вывести "иди".
	Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
	Если светофор желтый и машины есть - вывести "жди".
	Если светофор желтый и машин нет - вывести "все рано жди".
	Если светофор красный и машин нет- вывести "стой все рано".
	Если светофор красный - и машины есть вывести "стой и жди".
    Если светофор в аварийном режиме вывести "делай что хочешь"!*/
    
    //     let color = prompt('Введите цвет на светофоре');
    //     let isRoadClear = confirm('На дороге есть движение машин?');
    // switch (color) {
    //     case 'красный':
    //       isRoadClear ? alert("стой и жди"): alert("стой все рано");
    //       break;
    //     case 'зеленый':
    //       isRoadClear ? alert("подожди пока нарушители проедут"): alert("иди");
    //       break;
    //     case 'желтый':
    //       isRoadClear ? alert("жди"): alert("все равно жди");
    //       break;
    //     default: alert("делай что хочешь");
    // };
