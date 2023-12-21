// deno run --allow-net src/http_server.ts
// curl http://localhost:8000
async function handler(_request: Request): Promise<Response> {
  const res = await fetch("https://api.github.com/users/denoland", {
    headers: {
      accept: "application/json",
    },
  });

  return new Response(res.body, {
    status: res.status,
    headers: {
      "content-type": "application/json",
    },
  });
}

Deno.serve(handler);
