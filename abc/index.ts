import { Application } from 'https://deno.land/x/abc@v1.3.3/mod.ts'
import { v4 } from "https://deno.land/std@0.100.0/uuid/mod.ts";

const app = new Application();

console.log('server is listening on port 3000');

app
  .get('/', () => {
    const uid = v4.generate();
    return {
      uid: uid,
    };
  })
  .post('/verify', async (ctx) => {
    const { uid } = await ctx.body as { uid: string };
    const result = v4.validate(uid);
    return { result };
  })
  .start({ port: 3000 });