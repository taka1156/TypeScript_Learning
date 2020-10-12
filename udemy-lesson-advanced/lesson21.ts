function toUpperCase_21(x: string): string;
function toUpperCase_21(x: number): number;
function toUpperCase_21(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}

const upperHello = toUpperCase_21('hello');

console.log('=== result: 関数のオーバーロード===');
