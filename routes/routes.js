import { Router } from "express";
import patient from "./patient.js";
import schema from "./schema.js";
import ping from "./ping.js";

const api = Router().use(patient).use(schema).use(ping);

export default Router().use("/api", api);
