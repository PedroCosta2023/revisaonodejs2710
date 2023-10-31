const expres = require("express")
const router = expres.Router()

const userRepo = require('../../repositories/users')

router.post("/login", (req, res) =>{
    res.send("Logged in!");
})

router.post("/signup", (req, res) =>{

    userRepo.create(req.body)
    /*
    Pegar email, nome e senha e salvar em um server
    Salvar em um arquivo JSON no server
    1. importar fs
    2. fazer o metodo create - criar user
    */

    res.send("Cadastrado!");
})

module.exports = router;