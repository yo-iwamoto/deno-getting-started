import { emptyDir, ensureFile } from 'https://deno.land/std/fs/mod.ts'

await emptyDir('./empty');

await ensureFile('./sample.ts');