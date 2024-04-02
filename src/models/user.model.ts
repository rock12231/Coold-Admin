'use strict';
import { Model, DataTypes, Sequelize } from 'sequelize';
const sequelize = require('./index');

const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = User;