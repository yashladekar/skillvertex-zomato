// const res = require("express/lib/response");
const sequelize = require("./db");

const Customer = require("./models/customer");
const Order = require("./models/oders");

sequelize
  .sync({force:false})
  .then((result) => {
    return Customer.create({
      name: "admin",
      email: "admin123@xzy.com",
    }).then((customer) => {
      console.log("fisst customer created:", customer);
    });
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
