import sq from "sequelize"
import sequelize from "../connector.js"

const {DataTypes} = sq

const category = sequelize.define(`category`, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    
})
export default category