import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
export const CategoricModel = sequelize.define(
  "categoric",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  
    categoric:{
      type: DataTypes.STRING,
      allowNull:false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  
  {
    timestamps: false,
  }
);