# typescript-learn
TypeScriptの勉強

## コマンド
- `tsc ファイル名 --out ./build`<br>
buildフォルダに出力<br>
  注意: [typescript outDir setting in tsconfig.json not working - StackOverFlow](https://stackoverflow.com/questions/45661027/typescript-outdir-setting-in-tsconfig-json-not-working)

  > コマンドラインで入力ファイルを指定すると、tsconfig.jsonファイルは無視されます。

  とのこと

- `ts-node ファイル名`<br>
  `node sample.js`と同じ感覚で実行でき、JSファイルは吐き出さず実行結果のみ見ることができるので便利

## やったこと
- 2019/10/24<br>
  環境構築

- 2020/8/13<br>
  環境修復、コンパイルの設定をES6に変更
