const expres = require("express")
const router = expres.Router()
const screenSignup = require("../../view/signup")
const screenSignin = require("../../view/signin")
const product = require("../../view/prod-layout")


const userRepo = require('../../repositories/users')

router.post("/login", (req, res) =>{
    res.send(product());
})

router.get("/login", (req, res) =>{
    res.send(screenSignin());
})

router.get("/signup", (req, res) =>{
    res.send(screenSignup());
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