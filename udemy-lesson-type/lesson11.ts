let unknownInput: unknown;
let anyInput: any;
let text: string;

// 結構ガバガバ
anyInput = 'hello';
anyInput = 21;
anyInput = true;
text = anyInput;

// anyより少し厳しくできる
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// エラーをわざと起こす: text = unknownInput;

// 保証したら動く
if (typeof unknownInput === 'string') {
  text = unknownInput
}

console.log('=== result: 型(unknown)===');
