const express = require("express")
const routesBeneficio = require("./routes/beneficioRouter")
const sequelize = require("../config/database")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use(routesBeneficio)



module.exports = app