'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const testElement = document.querySelector('.test');

    Hammer(testElement).on('drag', (e) => {
        console.log('drag');
 
    })


    Hammer(testElement).on('tap', (e) => {
        console.log('tap');
    })
})


