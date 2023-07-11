"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const domain_1 = require("@test-sgamid/domain");
const fastify = (0, fastify_1.default)({
    logger: true,
});
fastify.get("/", async function handler(request, reply) {
    return (0, domain_1.addAgeOfCaptain)(32, 60);
});
async function run() {
    try {
        await fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
process.on("SIGINT", () => {
    fastify.close().catch(console.error);
});
run().catch(console.error);
