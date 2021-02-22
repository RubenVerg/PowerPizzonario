"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeSide = exports.openSide = exports.__name = void 0;
exports.__name = 'credits';
function openSide() {
    document.querySelector('#mySidebar').style.width = '100%';
    document.querySelector('#mySidebar').style.display = 'block';
}
exports.openSide = openSide;
function closeSide() {
    document.querySelector('#mySidebar').style.display = 'none';
}
exports.closeSide = closeSide;
