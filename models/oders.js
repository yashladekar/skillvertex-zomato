const Sequelize = require("sequelize");
const sequelize = require("../db"); // "../util/database"

const Order = sequelize.define(
  "order",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price:{
      type:Sequelize.FLOAT,
      allowNull:true,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Order;
