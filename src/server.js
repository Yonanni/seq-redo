import express from "express"
import cors from "cors"
import db from "./db/models/index.js"
import service from "./services/index.js"


const port = process.env.PORT || 3003
const server = express()

server.use(express.json())
server.use(cors())

server.use("/", service)

db.sequelize.sync({force: false, logging: false}).then(() => {
    server.listen(port, async () => {
        console.log(`server runing on port: ${port}`)
    })
})

