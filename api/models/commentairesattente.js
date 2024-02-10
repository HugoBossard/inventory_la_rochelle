'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentairesAttente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CommentairesAttente.belongsTo(models.Materiels, {
        foreignKey: 'idMateriel',
        sourceKey: 'id'
      })
    }
  }
  CommentairesAttente.init({
    libelle: DataTypes.STRING,
    dateCommentaire: DataTypes.DATE,
    idMateriel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CommentairesAttente',
  });
  return CommentairesAttente;
};