"use strict";

const arr = [1, 42, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0; так нельзя делать, теряется логика, поялвяется много пустых блоков внутри массива
// console.log(arr.length);
// console.log(arr); в массиве будее 94 пустых блока

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри масива ${arr}`);
// });

// arr.pop(); //удаляет последнее значение в массиве
// arr.push(10); //добавляет в конец значение в массиве


// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", "); // строчку превратили в массив
// products.sort();
// console.log(products.join("; ")); // склеили массив