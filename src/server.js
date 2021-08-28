import express from "express"
import cors from "cors"
import { syncTestSequelize } from "./db/connector.js"


const port = process.env.PORT || 3003
const server = express()

server.use(express.json())
server.use(cors())

server.listen(port, async () => {
    await syncTestSequelize()
    console.log(`server runing on port: ${port}`)
})