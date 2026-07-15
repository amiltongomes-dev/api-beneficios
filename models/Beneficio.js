const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Beneficio = sequelize.define("Beneficio", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    funcionarioId:{
        type: DataTypes.STRING,
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
    }
})

module.exports = Beneficio