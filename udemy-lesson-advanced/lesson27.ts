interface FuncA_27 {
  (a: number): number;
}

interface FuncB_27 {
  (a: string): string;
}

let unionFunc: FuncB_27 | FuncA_27;

// 1
/* unionFunc = function (a: number | string) {
  return 'a';
}; */

// 2
unionFunc = function (a: number | string) {
  return 1;
};

// 1 or 2の関数どちらかを定義できる。
// 定義した関数によって　下の関数の振る舞いも変わる
unionFunc(3);

console.log('=== result: 関数型のユニオン型===');
