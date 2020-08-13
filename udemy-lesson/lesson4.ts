// 配列のデータ形式を固定
const book: [string, number, boolean] = ['リーダブルコード', 2500, false];

console.log('=== result: 型(tuple)===');
console.log(book);
book.push(21); // これは入る
console.log(book);
console.log(book[2]);
// エラーをわざと起こす: console.log(book[4]);
