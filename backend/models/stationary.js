module.exports = (sequelize, Sequelize) => {
  const StationaryProduct = sequelize.define("stationary_products", {
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

  return StationaryProduct;
};
