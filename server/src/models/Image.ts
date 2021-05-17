const { Model, DataTypes } = require('sequelize');
 
export default class Image extends Model {
  static init(sequelize) {
    super.init({
      path: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category'} )
  }
}