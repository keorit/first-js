"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str)); //примитивные данные - строка 
// console.log(typeof(strObj)); //после применения метода стала объектом

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 150,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;     //не надо использовать ,устаревший формат

// Object.setPrototypeOf(jonh, soldier); //современное представление ООП

// console.log(jonh.armor);
jonh.sayHello();