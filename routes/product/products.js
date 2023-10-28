const express = require("express")
const router = express.Router();

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

router.get("/products", (req, res) =>{
    res.send("Todos produtos")
})

module.exports = router;