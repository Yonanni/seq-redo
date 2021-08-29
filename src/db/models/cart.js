import sq from "sequelize"
import sequelize from "../connector.js"

const {DataTypes} = sq

const cart = sequelize.define("cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
    
})

export default cart