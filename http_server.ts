// deno run --allow-net http_server.ts
// curl http://localhost:8000
const handler = async (_request: Request): Promise<Response> => {
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
};

Deno.serve(handler);
