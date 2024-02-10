'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('CommentairesAttentes', [{
      libelle: "Envoie au SIGE",
      dateCommentaire: new Date(),
      idMateriel: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      libelle: "Envoie au SIGE",
      dateCommentaire: new Date(),
      idMateriel: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('CommentairesAttentes', null, {});
  }
};
