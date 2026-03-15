# LRC

LRCは音楽の歌詞を記述するための構文解析ライブラリです。

## デモ
[LRCの使用例](https://code4fukui.github.io/LRC/)

## 機能
- LRC形式の歌詞ファイルの解析と生成
- 時間情報付きの歌詞データの管理

## 使い方
```js
import { LRC } from "https://code4fukui.github.io/LRC/LRC.js";

const lrc = `
[ti: title by name]

[00:00.00] a
[00:01.00] b
[01:01.00] c
`;
console.log(LRC.parse(lrc));

const data = {
  title: "title by name",
  lyrics: [
    { t:     0, lyrics: "a" },
    { t:  1000, lyrics: "b" },
    { t: 61000, lyrics: "c" },
  ],
};
console.log(LRC.stringify(data));
```

## ライセンス
MIT License