import { camelCase, pascalCase, snakeCase, paramCase, dotCase } from 'https://deno.land/x/case@v2.1.0/mod.ts';

const text = 'hello world';

const camel = camelCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);
const param = paramCase(text);
const dot = dotCase(text);

console.log(camel, pascal, snake, param, dot);