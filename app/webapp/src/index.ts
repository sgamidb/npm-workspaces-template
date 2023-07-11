import Fastify from "fastify";
import { addAgeOfCaptain } from "@test-sgamid/domain";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async function handler(request, reply) {
  return addAgeOfCaptain(32, 60);
});

async function run(): Promise<void> {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

process.on("SIGINT", () => {
  fastify.close().catch(console.error);
});

run().catch(console.error);
