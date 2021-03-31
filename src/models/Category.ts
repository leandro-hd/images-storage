const Sequelize = require('sequelize');
const database = require('./db');
 
const Category = database.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})
 
export { Category };