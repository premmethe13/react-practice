module.exports = (sequelize, Sequelize) => {
  const DairyProduct = sequelize.define("dairy_products", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.INTEGER,
    },
  });

  return DairyProduct;
};
