/**
 * 
 * This file will be
 * 
 * Category Fields
 * 1. id
 * 2. name
 * 3. description
 */
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('Category')
    "Category", {
        id: {
            type: Sequelize.Integer,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,

        }
    }
    return Category;
}