// const APPLE_DEVOTEES: 'apple' = 'Windows'
const APPLE_DEVOTEES: 'apple' = 'apple';
// 擬似Enum的なもの
const clothSize: 'small' | 'medium' | 'large' = 'small';

let cloth: {
  color: String;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: 'small',
};

console.log('=== result: 型(literal)===');
console.log(APPLE_DEVOTEES);
console.log(clothSize);
console.log(cloth);
