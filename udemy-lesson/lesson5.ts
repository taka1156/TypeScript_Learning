// スターバックスのコーヒー

// 定義
enum COFFEE_SIZE1 {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI',
}

enum COFFEE_SIZE2 {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee1 = {
  hot: true,
  size: COFFEE_SIZE1.TALL,
};

const coffee2 = {
  hot: true,
  size: COFFEE_SIZE2.TALL,
};

// エラーをわざと起こす: COFFEE_SIZE.MEGA = 'MEGA';
// エラーをわざと起こす: COFFEE_SIZE.SHORT = 'short';

console.log('=== result: 型(Enum)===');
console.log(COFFEE_SIZE1);
console.log(coffee1);
coffee1.size = COFFEE_SIZE1.GRANDE;
console.log(coffee1);

console.log('\n*** coffee1[定義:COFFEE_SIZE1] ***');
console.log(coffee1);
console.log('\n*** coffee2[定義：COFFEE_SIZE2] ***');
console.log(coffee2);
