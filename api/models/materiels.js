'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materiels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materiels.hasMany(models.Emprunts, {
        foreignKey: 'idMateriel',
        sourceKey: 'id'
      }),
      Materiels.hasMany(models.CommentairesAttente, {
        foreignKey: 'idMateriel',
        sourceKey: 'id'
      })
    }
  }
  Materiels.init({
    nomProduit: DataTypes.STRING,
    etat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materiels',
  });
  return Materiels;
};