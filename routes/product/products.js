const express = require("express");
const products = require("../../repositories/products");
const router = express.Router();
const produtoJson = require("../../repositories/products")

router.post("/add-product", (req,res) =>{
    res.send("Product added")
})

router.post("/edit-product", (req,res) =>{
    res.send("Produto editado")
})

router.post("/delete-product", (req, res) =>{
    
    console.log(req.body);
    res.send("Produto deletado")
})

router.get("/products",async (req, res) =>{
    const allprods = await produtoJson.getAll()
    res.send(allprods)
})

module.exports = router;