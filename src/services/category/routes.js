import { Router } from "express";
import categoryHandlers from "./handlers.js";
const route = Router()

route.get("/", categoryHandlers.list)
route.post("/", categoryHandlers.create)
route.get("/:id", categoryHandlers.single)
route.put("/:id", categoryHandlers.updates)
route.delete("/:id", categoryHandlers.removes)

export default route