import sequelize from "../connector.js";
import product from "./product.js";
import category from "./category.js";
import user from "./user.js";
import review from "./review.js";
import cart from "./cart.js"


// category.hasMany(product, {
//     onDelete: `cascade`,
//     foreignKey: {allowNull: false}
// })
// product.belongsTo(category, {
//     onDelete: `cascade`,
//     foreignKey: {allowNull: false}
// })

// user.hasMany(review, {
//     onDelete: `cascade`,
//     foreignKey: {allowNull: false}
// })
// review.belongsTo(user, {
//     onDelete: `cascade`,
//     foreignKey: {allowNull: false}
// })
// product.hasMany(review)
// review.belongsTo(product)

export default {product, category, user, review, cart, sequelize}