import { v4 } from "https://deno.land/std@0.100.0/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

console.log(v4.validate(uid));