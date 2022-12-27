const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
     id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    profesion:{
      type: DataTypes.STRING,
    },
    origen:{
      type: DataTypes.STRING,
    },
    imagen:{
      type: DataTypes.STRING,
    },
    fechaNacimiento:{
        type: DataTypes.DATE,
    },
    comentario:{
        type: DataTypes.TEXT,
    },
  });
};
