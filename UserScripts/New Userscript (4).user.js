// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-16
// @description  try to take over the world!
// @author       You
// @match        https://opac.sclib.org/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sclib.org
// @grant        none
// ==/UserScript==
// document.querySelectorAll(".rankInCon")[0].children[0].children[2].href
// onclick="window.location.href='https://www.example.com';" style="cursor: pointer;

(function() {
    'use strict';
document.querySelectorAll(".rankInCon")[0].setAttribute("onclick", document.querySelectorAll(".rankInCon")[0].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[0].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[1].setAttribute("onclick", document.querySelectorAll(".rankInCon")[1].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[1].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[2].setAttribute("onclick", document.querySelectorAll(".rankInCon")[2].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[2].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[3].setAttribute("onclick", document.querySelectorAll(".rankInCon")[3].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[3].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[4].setAttribute("onclick", document.querySelectorAll(".rankInCon")[4].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[4].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[5].setAttribute("onclick", document.querySelectorAll(".rankInCon")[5].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[5].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[6].setAttribute("onclick", document.querySelectorAll(".rankInCon")[6].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[6].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[7].setAttribute("onclick", document.querySelectorAll(".rankInCon")[7].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[7].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[8].setAttribute("onclick", document.querySelectorAll(".rankInCon")[8].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[8].setAttribute("style", "cursor: pointer;")
    document.querySelectorAll(".rankInCon")[9].setAttribute("onclick", document.querySelectorAll(".rankInCon")[9].children[0].children[2].href)
document.querySelectorAll(".rankInCon")[9].setAttribute("style", "cursor: pointer;")

    // Your code here...
})();