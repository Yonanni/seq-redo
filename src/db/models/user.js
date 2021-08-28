import sq from "sequelize"
import sequelize from "../connector.js"

const {DataTypes} = sq

const user = sequelize.define(`user`, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    avatar: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})