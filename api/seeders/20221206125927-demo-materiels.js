'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Materiels', [{
      nomProduit: 'MBP1',
      etat: 'emprunter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomProduit: 'MBP2',
      etat: 'disponible',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomProduit: 'MBP3',
      etat: 'disponible',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomProduit: 'MBP4',
      etat: 'emprunter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomProduit: 'MBP5',
      etat: 'attente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nomProduit: 'MBP6',
      etat: 'attente',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Materiels', null, {});
  }
};
