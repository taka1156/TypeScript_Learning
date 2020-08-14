const fruits: string[] = ['Apple', 'Banana', 'Grape'];

// 型を複数持ちたい
const union_fruits: (string | number)[] = ['Apple', 'Banana', 'Grape', 1];

/*
 好ましくない?
 const any_fruits: any = ['Apple', 'Banana', 'Grape', 1];
*/

console.log('=== result: 型(array)===');
// エラーをわざと起こす: fruits.push(23);
console.log(fruits);
console.log(union_fruits);
