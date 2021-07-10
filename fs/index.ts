import { emptyDir, ensureFile } from 'https://deno.land/std@0.100.0/fs/mod.ts'

await emptyDir('./empty');

await ensureFile('./sample.ts');