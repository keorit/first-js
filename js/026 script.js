"use strict";

// To String

//1
console.log(typeof(String(null)));
console.log(typeof(String(4))); // 4 превратилась в строку

//2

console.log(typeof(5 + '')); //при сложении со строкой получается тип данных - строка

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

console.log(typeof(Number('4')));

console.log(typeof(+'4'));

// 3
console.log(typeof(parseInt("15px", 10)));



let answ = +prompt("Hello", "");

//To Boolean//////////////

0, '', null, undefined, NaN; // Это все ложь - false

// 1 нативный метод
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2

console.log(typeof(Boolean('4')));

//3

console.log(!!"jhgj4");

