const express = require('express'); //requiero express
const path = require('path'); //requiero path

//creo objeto app que ejecuta express
let app = express(); 

app.use(express.urlencoded({extended:false}));

//defino que obtendré mis recursos estáticos desde la carpeta public
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000
//defino el puerto
app.listen(port, ()=>{
    console.log(`Servidor conectado al puerto ${port}`)
});

//defino ñas rutas vinculandolas con un html 

const homePath = path.join(__dirname, "/views/home.html")
app.get("/",(req, res)=>{
res.sendFile(homePath);
})

const registerPath = path.join(__dirname, "/views/register.html")
app.get("/register",(req, res)=>{
res.sendFile(registerPath);
})

const loginPath = path.join(__dirname, "/views/login.html")
app.get("/login",(req, res)=>{
res.sendFile(loginPath);
})

//las rutas a donde se enviarán los datos

app.post("/datos-registro",(req, res)=>{
res.send(req.body);
})

app.post("/datos-login",(req, res)=>{
    res.send(req.body);
})