import { Router } from "express";
import prodRoutes from "./product/routes.js"
import categRoutes from "./category/routes.js"

const route = Router()

route.use("/products", prodRoutes)
route.use("/category", categRoutes)

export default route