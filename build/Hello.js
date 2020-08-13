"use strict";
let lang = 'TypeScript';
console.log(`Hello ${lang} World`);
let check = (x, y) => {
    console.log(x > y || x === y);
    console.log(x >= y);
};
check(null, 0);
