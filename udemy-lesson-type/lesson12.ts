function error(message: string): never {
  throw new Error(message);
  // while(true){}
}

console.log('=== result: 型(nerver)===');
console.log(error('typo'));
