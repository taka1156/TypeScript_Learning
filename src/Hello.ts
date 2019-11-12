let lang: string = 'TypeScript';
console.log(`Hello ${lang} World`);

let check = (x: any , y: any): void => {
  console.log(x > y || x === y);
  console.log(x >= y);
};
check(null, 0);
