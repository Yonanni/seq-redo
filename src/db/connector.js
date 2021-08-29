import { Sequelize } from "sequelize"

const {PGDATABASE, PGUSER, PGHOST, PGPASSWORD, PGPORT} = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: `postgres`
})

const syncTestSequelize = async () => {
    try {
        await sequelize.authenticate()
        // await sequelize.sync({force: true})
        console.log(`🎊🎁 DB running!!!!!`)
    } catch (error) {
        console.log(error)
    }
}
syncTestSequelize()
export default sequelize






















