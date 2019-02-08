'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define('Lead', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    email: DataTypes.STRING,
    leadOrigin: DataTypes.STRING,
    type: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  Lead.associate = function (models) {
    Lead.belongsTo(models.User, {
      foreignKey: {
        fieldName: 'createdBy'
      }
    });
  };
  return Lead;
};