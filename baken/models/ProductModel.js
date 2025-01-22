import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { CategoricModel } from "./CategoricModel.js";

export const ProductModel = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    production_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
  },
  {
    timestamps: false,
  }
  
);

CategoricModel.hasMany(ProductModel, { foreignKey: "categoric_id" });
ProductModel.belongsTo(CategoricModel, { foreignKey: "categoric_id" });


