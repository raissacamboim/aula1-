//importar o express
const express = require('express')

//criar uma aplicação express
const app = express(); 

//middleware para analisae JSON
app.use(express.json()); 

//middleware para dados de formulario 
app.use(express.urlencoded({extended: true}))

//servindo arquivos estaticos 
app.use(express.static('public'))

//Definir uma rota basica de GET
app.get('/login', (req, res)=>{res.sendFile('index.html', {root: '/public'})
});

//uma simples autenticação 
app.post ('/login', (req,res)=> {
    const {username, password} = req.body
    if(username === "admin" && password === "123") {
      res.send ("login bem sucedido!");
    }else{
        res.send("Falha no login!");
    }

})