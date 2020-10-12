function toUpperCase_25(x: string): string;
function toUpperCase_25(x: number): number;
function toUpperCase_25(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}

interface tmpFunc {
  (x: string): number;
  (x: number): number;
}

// インターフェースが入る
const upperHello_25 = toUpperCase_25;
toUpperCase_25('hi');
toUpperCase_25(23);

// オーバーロードのインターフェースを適用したら全てを満たさないとだめ
// x: numberではなく、x: number | string
const upperHello_25a: tmpFunc = function (x: number | string) {
  return 0;
};

console.log('=== result: 関数型のオーバーロード===');
