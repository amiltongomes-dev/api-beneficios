const { DataTypes } = require("sequelize")
const sequelize = require("../../config/database")

const Beneficio = sequelize.define("Beneficios", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    funcionarioId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valeAlimentacao:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
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

module.exports = Beneficio