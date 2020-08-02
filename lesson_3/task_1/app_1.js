/*
	-Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
	
	-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
	- отримує текст з параграфа з id "content"
	- отримує текст з блоку з id "rules"
	- замініть текст параграфа з id 'content' на будь-який інший
	- замініть текст параграфа з id 'rules' на будь-який інший
	- змініть кожному елементу колір фону на червоний
	- змініть кожному елементу колір тексту на синій
	- отримати весь список класів елемента з id=rules і вивести їх в console.log
	- отримати всі елементи з класом fc_rules
	- поміняти колір тексту у всіх елементів fc_rules на червоний */

	let content = document.getElementById("content");
	console.log(content);
	let rules = document.getElementById("rules");
	console.log(rules);
	content.innerHTML = 'Content text';
	rules.innerHTML = 'Rules text';
	content.style.backgroundColor = 'red';
	rules.style.backgroundColor = 'red';
	content.style.color = '#0d0d9fde';
	rules.style.color = '#0d0d9fde';
	let rulesClassList = rules.classList;
	console.log(rulesClassList);
	let fc_rules = document.getElementsByClassName('fc_rules');
	console.log(fc_rules);
	for(const iter of fc_rules) {
		iter.style.color = 'red';
	}
	
