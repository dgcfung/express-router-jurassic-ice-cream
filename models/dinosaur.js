'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dinosaur = sequelize.define('Dinosaur', {
    name: DataTypes.STRING,
    height: DataTypes.INTEGER,
    period: DataTypes.STRING
  }, {});
  Dinosaur.associate = function(models) {
    // associations can be defined here
  };
  return Dinosaur;
};