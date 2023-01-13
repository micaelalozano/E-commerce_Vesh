const Sequelize = require("sequelize");

const db = new Sequelize("sonny7", "micaelalozano", "pzYtWgWUZNNL6sN1cjjy1waPyWM2TjQA", {
  host: "dpg-cf0bfhp4reb56qj7hrs0-a",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
