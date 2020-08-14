// 型注釈
const person1: {
  name: string;
  age: number;
} = {
  name: 'taka1156',
  age: 22,
};

// 型推論(マウスホバーで推論結果が見れる:vscord)
const person2 = {
  name: 'taka1156',
  age: 22,
};

// 型推論(ネスト)
const person3 = {
  name: {
    github: 'taka1156',
    twitter: 'Taka1156',
  },
  age: 22,
};

/* 
あまり使用しない?

const person: {} = {
  name: 'taka1156',
  age: 22,
};

const person: object = {
  name: 'taka1156',
  age: 22,
};

console.log(person.gender);のエラーを吐かない?
*/

console.log('=== result: 型(object)===');
// エラーをわざと起こす: console.log(person.gender);
console.log('\n*** person1[型注釈] ***');
console.log(person1);
console.log(person1.name);
console.log(person1.age);

console.log('\n*** person2[型推論] ***');
console.log(person2);
console.log(person2.name);
console.log(person2.age);
