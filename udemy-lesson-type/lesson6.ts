let anything: any = true;
anything = {};
anything.hoge = 'foo barr';
anything = ['hello', false, 5];

let banna = 'banana';
banna = anything;

// anyを入れてるとそれに関わるもの全てがanyになる
console.log('=== result: 型(any)===');
console.log(anything);
console.log(banna);


console.log('\n*** typeof ***');
console.log(typeof anything);
console.log(typeof banna);