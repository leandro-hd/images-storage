const { Model, DataTypes } = require('sequelize');
 
export default class Category extends Model {
  static init(sequelize) {
    super.init({
      category: DataTypes.STRING
    }, {
      sequelize
    })
  }
}