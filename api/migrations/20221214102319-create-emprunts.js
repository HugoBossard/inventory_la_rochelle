'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Emprunts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idMateriel: {
        type: Sequelize.INTEGER
      },
      nomEmprunteur: {
        type: Sequelize.STRING
      },
      groupe: {
        type: Sequelize.STRING
      },
      dateEmprunt: {
        type: Sequelize.DATE
      },
      dateRetourPrevu: {
        type: Sequelize.DATE
      },
      dateRetour: {
        type: Sequelize.DATE
      },
      commentaire: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Emprunts');
  }
};