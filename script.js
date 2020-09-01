'use strict';
const btnPlayPause = document.querySelector('.an-pause');
const btnReset = document.querySelector('.an-reset');
const butterFly = document.querySelector('img');
let count = 0;
let butInteval;
let butterFlyMove = function () {
    butInteval = requestAnimationFrame(butterFlyMove);
    count++;

    if (count < 1000) {
        butterFly.style.left = count + 'px';
    } else {
        cancelAnimationFrame(butInteval);
    }

};
let stopAnim = true;
btnPlayPause.addEventListener('click', () => {
    if (stopAnim) {
        butInteval = requestAnimationFrame(butterFlyMove);
        stopAnim = false;
    } else {
        stopAnim = true;
        cancelAnimationFrame(butInteval);
    };
});
btnReset.addEventListener('click', () => {
    butterFly.style.left = 0;
    count = 0;
    cancelAnimationFrame(butInteval);
});