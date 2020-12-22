"use strict";

// атрибут defer означает, что надо обрабатывать таблицу загружая   script в фрновом режиме

const p = document.querySelectorAll('p');
console.log(p);


// const script = document.createElement('script');
// script.src = "js/test.js";
// script.async = false;
// document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");
