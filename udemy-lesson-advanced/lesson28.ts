function advancedFun(...args: number[]) {}

function advancedFunTuple(...args: [number, string, boolean?, ...number[]]) {}

// error
// advancedFunTuple(0, 'hi', 3, 3);
advancedFunTuple(0, 'hi', true, 3, 3, 3, 3, 3);

console.log('=== result: レストパラメータ(可変長引数)===');
