// import { Sequelize } from "sequelize";
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "", {
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT0",
  },
  host: "localhost",
});

module.exports = sequelize;
