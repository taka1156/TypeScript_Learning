const greeting = (str: string): void => {
  console.log(str);
};

/*
こういう時はundefinedも使えるが使わない
const greeting_undefined = (str: string): undefined => {
  console.log(str);
  return;
};
*/

const add = (a: number, b: number): number => {
  return a + b;
};

function malt(a: number, b: number): number {
  return a * b;
}

// 関数代入時の型
const anotherAdd: (n1: number, n2: number) => number = add;

// コールバックの型
function dobbleAndHandle(num1: number, num2: number, cb: (num: number) => number): number {
  return cb(num1) + cb(num2);
}

console.log('=== result: 型(function)===');
console.log(greeting('Udemy')); // undefined
greeting('Udemy');
console.log(add(9, 4));
console.log(malt(9, 4));
console.log(anotherAdd(9, 4));
console.log(dobbleAndHandle(9, 4, (a: number): number => a * a));
console.log(dobbleAndHandle(9, 4, (a: number): number => Math.sqrt(a)));