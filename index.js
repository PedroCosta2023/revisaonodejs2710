const expres = require("express")
const app = expres();
const authRoutes = require("./routes/auth/auth")
const productRoutes = require("./routes/product/products")
const bodyParser = require("body-parser")

//Pegamos os dados de um formulario HTML
app.use(bodyParser.urlencoded({extended: true}))
//Pegamos os dados de um Json
app.use(bodyParser.json())

app.use(expres.static('public'));

app.use("/admin",authRoutes)

app.use("/admin",productRoutes)


app.listen(3001, ()=>{
    console.log('Servidor rodando na porta 3001')
})