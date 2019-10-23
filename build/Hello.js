"use strict";
var lang = 'TypeScript';
console.log("Hello " + lang + " World");
var check = function (x, y) {
    console.log(x > y || x === y);
    console.log(x >= y);
};
console.log(check(null, 0));
