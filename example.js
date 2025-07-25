import { CSV } from "https://js.sabae.cc/CSV.js";
import { LRC } from "./LRC.js";

const fn = "theme-of-kawada-elementary-school.lyrics.csv";
const dstfn = "theme-of-kawada-elementary-school.lrc";

const lyrics = await CSV.fetchJSON(fn);
const lrc = LRC.stringify({ title: "河和田小学校のテーマ", lyrics });
console.log(lrc);
await Deno.writeTextFile(dstfn, lrc);

