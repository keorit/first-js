'use strict';

"use strict";

//


// touchstart  Коснулись экрана
// touchmove Палец убрали
// touchend Палец убрали
// touchenter 
// touchleave
// touchcancel



window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();

    //     console.log('start');
    //     console.log(e.changedTouches);
    // });

    box.addEventListener('touchmove', (e) => {
            e.preventDefault();

            console.log(e.targetTouches[0].pageX);
        });


    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });

});

// touches сколько пальцев на экране

// targetTouches  Список пальцев которые взаиможействуют с элементом

// changedTouches Список пальцев, которые учавствуют в текущем событии. Если например это событие touchend, то список будет содержать палец который был убран (Даже если остальные 4 пальца до сих пор на экране).
