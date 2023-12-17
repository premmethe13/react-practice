"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphanumeric: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          isValidPhoneNo: function (value) {
            if (!value) return value;
            var regexp = /^[0-9]+$/;
            var values = Array.isArray(value) ? value : [value];
            values.forEach(function (val) {
              if (!regexp.test(val)) {
                throw new Error("Number only is allowed.");
              }
            });
            return value;
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
