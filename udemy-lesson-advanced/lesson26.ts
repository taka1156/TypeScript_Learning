interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}

interface FuncB {
  (a: string): number;
}

let intersectionFunc: FuncB & FuncA;

// FuncB &  FuncAを満たす関数のみ(FuncBより　引数bが存在しない場合もある)
intersectionFunc = function (a: number | string, b?: number | string ): number {
    return 0;
};

console.log('=== result: 関数型のインターセクション===');
