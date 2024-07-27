// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-09
// @description  try to take over the world!
// @author       You
// @match        https://opac.sclib.org/*
// @grant GM_xmlhttpRequest
// ==/UserScript==
/*
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
  for (var i = 0; i < imgTags.length; i++) {
    var img = imgTags[i];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }
  }
})();


*/

//  -------------------------------- 0
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[0];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();




//  -------------------------------- 1
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[1];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 2
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[2];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 3
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[3];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 4
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[4];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();

//  -------------------------------- 5
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[5];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 6
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[6];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 7
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[7];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 8
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[8];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 9
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[9];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();
//  -------------------------------- 10
(function() {
  'use strict';
    const apiUrl = "http://ia32.duckdns.org:5000/coverapi/?url=https%3A%2F%2Fbook-resource.dataesb.com%2Fwebsearch%2Fmetares%3FcmdACT%3DgetImages%26type%3D0%26isbns%3D%2C"
  var imgTags = document.querySelectorAll('img');
    var img = imgTags[10];
    var alt = img.getAttribute('isbn');
    if (alt) {
        alt=alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ','').replaceAll("\\W", "");
        console.log(alt.replaceAll('\(hbk.\)','').replaceAll('-','').replaceAll(':','').replaceAll(' ','').replaceAll('. ',''));
        console.log('Found ISBN image:', img.src);

GM_xmlhttpRequest({
  method: "GET",
  url: apiUrl + alt ,
  onload: function(response) {
        img.src = response.finalUrl;
      console.log(response.finalUrl);
      console.log(img);
  }
});


    }

})();

// holder
