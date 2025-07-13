import * as t from "https://deno.land/std/testing/asserts.ts";
import { LRC, formatTime } from "./LRC.js";

/*
for (let i = 0; i < 61000; i += 10) {
  console.log(formatTime(i));
}
*/

Deno.test("parse", () => {
  t.assertEquals(LRC.parse(`[ti: title by name]

[00:00.00] a
[00:01.00] b
[01:01.00] c
`), {
    title: "title by name",
    lyrics: [
      { t:     0, lyrics: "a" },
      { t:  1000, lyrics: "b" },
      { t: 61000, lyrics: "c" },
    ],
  })
});
Deno.test("stringify", () => {
  t.assertEquals(LRC.stringify({
    title: "title by name",
    lyrics: [
      { t:     0, lyrics: "a" },
      { t:  1000, lyrics: "b" },
      { t: 61000, lyrics: "c" },
    ],
  }), `[ti: title by name]

[00:00.00] a
[00:01.00] b
[01:01.00] c
`);
});
