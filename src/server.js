require("dotenv").config()
const app = require("./app")
const sequelize = require("../config/database")

const PORT = 4001

sequelize.sync()

app.listen(PORT, () =>{
    console.log(`Servidor iniciado na porta ${PORT}`)
})