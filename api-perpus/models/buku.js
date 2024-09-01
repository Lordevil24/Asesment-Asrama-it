'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buku.init({
    judul: DataTypes.STRING,
    penulis: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    tahun_terbit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buku',
  });
  return buku;
};