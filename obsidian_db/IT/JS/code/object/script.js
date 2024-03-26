"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const object = {
        a : 'aaa',
        b : 'bbb',
    };

    object.c = 'ccc'; //динамически созданое свойство

    console.log(object.a, object.b);
    console.log(object['a'], object['b']);
    console.log(object.c);
});
