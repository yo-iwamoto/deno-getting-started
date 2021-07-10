import { serve } from 'https://deno.land/std@0.100.0/http/server.ts';

const server = serve({ port: 3000 });
console.log('server is listening on port 3000');

for await (const req of server) {
  await req.respond({
    body: `you did ${req.method} request!`,
  });
};