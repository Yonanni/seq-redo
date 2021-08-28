import sq from "sequelize"

const {Sequelize} = sq

const {PGDATABASE, PGUSER, PGHOST, PGPASSWORD, PGPORT} = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: `postgres`
})

export const syncTestSequelize = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: false})
        console.log(`🎊🎁 DB running!!!!!`)
    } catch (error) {
        console.log(error)
    }
}
export default sequelize






















