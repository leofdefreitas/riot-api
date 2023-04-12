import request from 'supertest';
import createApp from "../app"
const logger = require("../logger");


const app = createApp();

describe("GET /test", () => {
    describe("is called", () => {
        //should return Teste bem sucedido
        it("should respond with Teste bem sucedido", async () => {
            const response = await request(app).get("/tryout");
            expect(response.statusCode).toBe(200);
        })
    })
})
