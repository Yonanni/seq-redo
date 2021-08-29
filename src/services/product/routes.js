import { Router } from "express";
import productHandlers from "./handlers.js";

const route = Router()

route.get("/", productHandlers.list)
route.post("/", productHandlers.create)
route.get("/:id", productHandlers.single)
route.put("/:id", productHandlers.updates)
route.delete("/:id", productHandlers.removes)

export default route