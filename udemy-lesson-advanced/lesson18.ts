// Demo
const input1 = <HTMLInputElement>document.getElementById('input');

// JSXはasの記法の方がいい?
const input2 = document.getElementById('input') as HTMLInputElement;
input1.value = '';
input2.value = '';

// このような書き方もできる。
(document.getElementById('input') as HTMLInputElement).value = 'init';

console.log('=== result: 型アサーション===');
