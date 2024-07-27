// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-11
// @description  try to take over the world!
// @author       You
// @match        https://opac.sclib.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sclib.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
document.querySelector("#q").setAttribute('placeholder', ' ⚠️要查看书在书架上的位置 请点击书名或书封面');
    document.querySelector("#keyWord").append("⚠️提示：点击书名或封面查看书位置")
 document.querySelectorAll(".sGrpChosedIn")[1].textContent='出版时间'
    // Your code here...
})();

    setTimeout(function() {
    document.querySelector("#q").setAttribute('value', '');
}, 2000);
