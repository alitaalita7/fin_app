const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { model, models } = require('../db');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  school_class: {type: DataTypes.INTEGER},
  coins: {type: DataTypes.INTEGER},
  xp: {type: DataTypes.INTEGER},
  completed_achievements: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
  completed_goals: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
  selected_goal: {type: DataTypes.INTEGER}
});

module.exports = {
  User,
};
