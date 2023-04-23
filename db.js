const Sequelize = require("sequelize");
const sequelize = new Sequelize("Exercicio456", "postgres", "1234", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});

module.exports = sequelize;
