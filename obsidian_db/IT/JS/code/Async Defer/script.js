"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    
    // button.addEventListener("touchstart", (event) => {
    //     event.preventDefault();
    //     console.log("Touch started");
    // });

    // // Обработчик события перемещения пальца по элементу
    // button.addEventListener("touchmove", (event) => {
    //     event.preventDefault();
    //     console.log("Touch move");
    // });

    // // Обработчик события отрыва пальца от элемента
    // button.addEventListener("touchend", (event) => {
    //     event.preventDefault();
    //     console.log("Touch end");
    // });
    //

    // button.addEventListener('touchstart', (e) => {
    //     console.log( e.touches );
    //     console.log( e.targetTouches );
    //     console.log( e.changedTouches );
    // })
        //
    //

    button.addEventListener('touchmove', (event) => {
        console.log(event.targetTouches[0].pageX);
    })

});
