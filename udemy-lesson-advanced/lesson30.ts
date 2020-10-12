const Mike = {
  name: 'Mike',
  age: 38,
} as const;

// 実際のオブジェクトを型定義として利用
type MikeType = typeof Mike;

console.log('=== result: 型の中でtypeofを使うと…===');
