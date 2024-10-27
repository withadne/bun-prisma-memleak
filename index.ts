import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      let posts = await prisma.article.findMany()
      return new Response(JSON.stringify(posts), {
        headers: {
          "Content-Type": "application/json"
        }
      })
    }
    return new Response("404!");
  },
});