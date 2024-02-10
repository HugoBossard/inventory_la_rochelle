'use strict';

const { date } = require('clever-tools/src/parsers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Emprunts', [{
      idMateriel: 1,
      nomEmprunteur: "Michel Cymes",
      groupe: "Enseignant",
      dateEmprunt: new Date("2022-11-05"),
      dateRetourPrevu: new Date("2023-03-05"),
      commentaire: "Materiel neuf",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      idMateriel: 4,
      nomEmprunteur: "Steven Bray",
      groupe: "LP Niort",
      dateEmprunt: new Date("2022-11-05"),
      dateRetourPrevu: new Date("2023-03-05"),
      commentaire: "Materiel neuf",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Emprunts', null, {});
  }
};
