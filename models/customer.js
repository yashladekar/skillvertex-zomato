const Sequelize = require("sequelize");
const sequelize = require("../db"); // "../util/database"

const Customer = sequelize.define(
  "customer",
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
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Customer;
