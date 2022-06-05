const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "public")));

const sequelize = require("../database/db");

const Customer = require("./models/customer");
const Order = require("./models/oders");

sequelize
  // .sync({force:true})
  .sync({ force: true })
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

      { id: 26, name: "ratatouille", type: "french" },
      { id: 27 , name: "creame brulee", type: "french" },
      { id: 28 , name: "mushroom julienne", type: "french" },
      { id: 29 , name: "omelet", type: "french" },
      { id: 30, name: "filet mignon", type: "french" },
    ]);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/frenchC", (req, res) => {
  Order.findAll({ where: { type: "french" } })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});
app.get("/indianC", (req, res) => {
  Order.findAll({ where: { type: "indian" } })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});
app.get("/japaneseC", (req, res) => {
  Order.findAll({ where: { type: "japanese" } })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});
app.get("/italianC", (req, res) => {
  Order.findAll({ where: { type: "italian" } })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

app.get("/mexicanC", (req, res) => {
  Order.findAll({ where: { type: "mexican" } })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

app.get("/chineseC", (req, res) => {
  Order.findAll({ where: { type: "chinese " } })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
});

app.listen(4444, () => {
  console.log("server started on http://localhost:4444");
});
