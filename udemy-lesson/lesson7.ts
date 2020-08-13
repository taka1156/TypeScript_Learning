let unionType: number | string = 10;
// エラーをわざと起こす: unionType.toUpperCase();
unionType = 'Udemy';
unionType.toUpperCase()

// 配列
let unionTypes: (number | string)[] = [ 22, 'taka'];

console.log('=== result: 型(union)===');
console.log(unionType);
console.log(unionTypes);