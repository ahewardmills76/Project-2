'use strict';
module.exports = (sequelize, DataTypes) => {
  const serviceProvider = sequelize.define('serviceProvider', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  serviceProvider.associate = function(models) {
    // associations can be defined here
  };
  return serviceProvider;
};