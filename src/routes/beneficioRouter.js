const express = require("express")

const router = express.Router()

const controller = require("../controller/beneficioController")

router.get("/beneficio", controller.listar)

router.post("/beneficio", controller.cadastrar)

module.exports = router