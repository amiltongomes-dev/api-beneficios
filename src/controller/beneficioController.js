const Beneficio = require ("../models/Beneficio")

exports.cadastrar = async(req,res) => {
    
    try {

        const beneficio = await Beneficio.create(req.body)
        res.status(201).json(beneficio)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensage:"Erro de Servidor"})
    }

}

exports.listar = async (req, res) => {
    const beneficios = await Beneficio.findAll()
    res.status(200).json(beneficios)
}
/*
exports.alterar = async (req, res) => {
    const funcionario = await Funcionario.update()
    res.status(201).json(funcionario)
}
/* */
/*
exports.delete = async (req, res) => {
    const funcionario = await Funcionario.delete()
    res.status(200).json(funcionario)
}
/* */
