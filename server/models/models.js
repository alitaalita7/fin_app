const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { model, models } = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstname: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  birth: { type: DataTypes.STRING},
  image: {type: DataTypes.STRING},
});

module.exports = {
  User,
};
