const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DairyProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DairyProduct.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DairyProduct',
  });
  return DairyProduct;
};