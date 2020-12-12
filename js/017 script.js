"use strict";

const str = "test";
const arr = [1, 2, 31];

console.log(arr.length);

console.log(str[2] = 'd'); //так не работает

console.log(str.toUpperCase());

const fruit = "Some Fruit";
console.log(fruit.indexOf("Fruit"));

const logg = "hello world";

console.log(logg.slice(6, 10)); //10 не включает в вырезание, делается до
console.log(logg.slice(6)); //вырезается все с позиции 6 и до конца строки
console.log(logg.slice(-4, -1)); //вырезается c конца строки

console.log(logg.substring(6, 10)); //нельзя использовать отрицательные значения 

console.log(logg.substr(6, 5)); //сколько символов можно вырезать

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));