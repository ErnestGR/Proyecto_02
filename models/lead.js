module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define("Lead", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    commpany: DataTypes.STRING,
    position: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    officePhone: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    leadOrigin :DataTypes.STRING,
  }, {});
 
  
  return Lead;
};