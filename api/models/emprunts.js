'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emprunts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Emprunts.belongsTo(models.Materiels, {
        foreignKey: 'idMateriel',
        sourceKey: 'id'
      })
    }
  }
  Emprunts.init({
    idMateriel: DataTypes.INTEGER,
    nomEmprunteur: DataTypes.STRING,
    groupe: DataTypes.STRING,
    dateEmprunt: DataTypes.DATE,
    dateRetourPrevu: DataTypes.DATE,
    dateRetourPrevu: DataTypes.DATE,
    dateRetour: DataTypes.DATE,
    nomEmprunteur: DataTypes.STRING,
    groupe: DataTypes.STRING,
    commentaire: DataTypes.STRING,
    idMateriel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Emprunts',
  });
  return Emprunts;
};