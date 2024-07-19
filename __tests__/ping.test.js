import request from "supertest";
import app from "../app.js";
import sinon from "sinon";

describe("Ping Route", () => {
  afterEach(function () {
    // reset spies after each test
    sinon.restore();
  });

  it("should respond with pong", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.status).toBe(200);
    expect(res.text).toBe("pong");
  });
});
