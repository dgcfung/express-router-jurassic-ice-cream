'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flavor = sequelize.define('Flavor', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    on_sale: DataTypes.BOOLEAN
  }, {});
  Flavor.associate = function(models) {
    // associations can be defined here
  };
  return Flavor;
};