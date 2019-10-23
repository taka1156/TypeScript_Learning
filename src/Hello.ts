let lang: string = 'TypeScript';
console.log(`Hello ${lang} World`);

let check = (x: any , y: any): void => {
  console.log(x > y || x === y);
  console.log(x >= y);
};

console.log(check(null, 0));
