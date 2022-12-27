const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("skill", {
     id: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};