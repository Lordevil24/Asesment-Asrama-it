'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buku', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      judul: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      penulis: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      penerbit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tahun_terbit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('buku');
  }
};
