// const res = require("express/lib/response");
const sequelize = require("/db.js");

const Customer = require("./models/customer");
const Order = require("./models/oders");

sequelize
  // .sync({force:true})
  .sync({ force: false })
  .then((result) => {
    // return Customer.create({
    //   name: "admin",
    //   email: "admin123@xzy.com",
    // }).then((customer) => {
    //   console.log("first customer created:", customer);
    // });
    // console.log(result);

    return Order.bulkCreate([
      //chinese
      { id: 1, name: "Peking Duck ", type: "chinese " },
      { id: 2, name: "Chinese Dumplings ", type: "chinese " },
      { id: 3, name: "pork in sweet ", type: "chinese " },
      { id: 4, name: "fried noodles", type: "chinese " },
      { id: 5, name: "chinese rice porridge ", type: "chinese " },

      //indian
      { id: 6, name: "rice and saffron", type: "indian" },
      { id: 7, name: "dahi papdum", type: "indian" },
      { id: 8, name: "soup", type: "indian" },
      { id: 9, name: "shrimps in batter", type: "indian" },
      { id: 10, name: "spicy chicken", type: "indian" },

      //italian
      { id: 11, name: " aquacotta", type: "italian" },
      { id: 12, name: " pasta with pesto", type: "italian" },
      { id: 13, name: " chestnut soup  ", type: "italian" },
      { id: 14, name: " chianti krodo", type: "italian" },
      { id: 15, name: "spaghetti", type: "italian" },

      //japanese
      { id: 16, name: " sushi", type: "japanese" },
      { id: 17, name: "ramen ", type: "japanese" },
      { id: 18, name: "katsudon ", type: "japanese" },
      { id: 19, name: "tempura", type: "japanese" },
      { id: 20, name: "sashimi ", type: "japanese" },

      //mexican
      { id: 21, name: " nachos with sause", type: "mexican" },
      { id: 22, name: " tortilla with meat", type: "mexican" },
      { id: 23, name: "tacos", type: "mexican" },
      { id: 24, name: "kapirotada cake", type: "mexican" },
      { id: 25, name: "guacamole", type: "mexican" },
    ]);
  })
  .catch((err) => {
    console.log(err);
  });

// module.exports = indexSequelize;
