// Задание 1 Вывод температуры по Фаренгейту
var Tc = prompt("Введите температуру С:"); // Введите температуру в градусах по Цельсию
var Tf = (9 / 5) * Tc + 32; //Формула расчета градусов оп Фаренгейту
alert('Температура по фаренгейту ' + '' + Tf); //Результат расчетов температуры

// Задание 2 Объявление переменных
var admin; //Переменная admin
var name = 'Василий'; //Переменная name со значением "Василий"
admin = name; // Присваиваем переменной admin значение переменной name
alert(admin); // Выводим значение переменной admin

// Задание 3 Сложение простых типов
var x = 1000 + "108"; //Складываем число со строкой, будет строка '1000108'. "+" конкатенирует строки, чтобы получилось математическое выражение, нужно преобразовать строку в число с помощью функции parseInt("108"), var x = 1000 + parseInt("108");
alert(x); // Выводим значение переменной x
