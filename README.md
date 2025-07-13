# LRC

- LRC is a parse/stringify library for the format to describe the lyrics of music

## usage

```js
import { LRC } from "https://code4fukui.github.io/LRC/LRC.js";

const lrc = `
[ti: title by name]

[00:00.00] a
[00:01.00] b
[01:01.00] c
`;
conosle.log(LRC.parse(lrc));

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

## reference

- [LRC (file format)](https://en.wikipedia.org/wiki/LRC_(file_format))
