import sq from "sequelize"
import sequelize from "../connector.js"

const {DataTypes} = sq

const review = sequelize.define(`review`, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rate: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

export default review