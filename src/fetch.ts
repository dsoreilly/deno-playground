// deno run --allow-net=deno.com src/fetch.ts
const res = await fetch("https://deno.com");
const body = await res.text();
console.log(body);
