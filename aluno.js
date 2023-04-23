const Sequelize = require("sequelize");
const database = require("./db");
const Aluno = database.define("aluno", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allownull: false,
    primaryKey: true,
  },

  nome: {
    type: Sequelize.STRING,
    allownull: false,
  },

  idade: {
    type: Sequelize.DECIMAL,
  },

  curso: {
    type: Sequelize.STRING,
    allownull: false,
  },
});

module.exports = Aluno;
