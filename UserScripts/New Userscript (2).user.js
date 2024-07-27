// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-13
// @description  try to take over the world!
// @author       You
// @match        https://opac.sclib.org/index
// @match        https://opac.sclib.org/?tenant=SC001
// @match       https://opac.sclib.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sclib.org
// @grant        none
// ==/UserScript==
function onclickpopupvideo(){
window.open( 'http://192.168.122.53:8000/2.mp4','newwindow','height=720,width=1280,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no')
}
(function() {
    'use strict';

var para = document.createElement("video");
document.querySelectorAll('.scLibImg')[0].remove()

document.querySelectorAll('.searchOut')[0].appendChild(para)

document.querySelectorAll('.searchOut')[0].childNodes[3].outerHTML='<dev class="disInlineBk searchRight"  style="margin-left: 70em;" > 帮助 : <a onclick="javascript:window.open( \'http://192.168.122.53:8000/2.mp4\',\'newwindow\',\'height=720,width=1280,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no\')" class="searchBtn" target="_blank" style="background: rgb(16, 130, 200);margin: 0 auto ;display: block;"><span style="color:white;">我该怎样找到图书位置</span></a></dev> <video  id="video" style="margin: 0 auto ;display: block;" width="57%" :controls="false" :autoplay="true" muted  loop><source src="http://192.168.122.53:8000/1.mp4" type="video/mp4">Your browser does not support HTML5 video.</video>'







    // Your code here...
})();

setTimeout(function() {
    document.querySelector("#video").play()
}, 5000);