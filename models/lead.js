'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define('Lead', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    email: DataTypes.STRING,
    leadOrigin: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Lead.associate = function(models) {
    // associations can be defined here
  };
  return Lead;
};