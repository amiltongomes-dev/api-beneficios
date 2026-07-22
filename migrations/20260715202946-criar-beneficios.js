'use strict';

const { DataTypes } = require("sequelize");

DataTypes

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable("Beneficios", {

      id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      funcionarioId:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      valeAlimentacao:{
        type: DataTypes.DECIMAL(10,2),
        allowNull:false
      },
      valeTransporte:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      valeSaude:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
      },
     createdAt:{
        type: DataTypes.DATE,
        allowNull:false
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull:false
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Beneficios")
  }
};
