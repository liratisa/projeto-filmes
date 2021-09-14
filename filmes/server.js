const express = require('express');
const app = express();
const filmes = require('./filmes.json');

filmes.map((item, index) => item.id = index + 1);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');


     // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})


app.get('/todos', (req, res) => {
    res.status(200).send(filmes);
})

const fs = require('fs')

app.delete('/delete/:id', (request, response) => {
    const idRequest = request.params.id;
    let filmes2 = filmes;
    
    let filtrado = filmes2.find(filme => filme.id == idRequest);

    let indice = filmes2.indexOf(filtrado);
    filmes2.splice(indice, 1);  
    filmes.map((item, index) => item.id = index + 1); 
    
    fs.writeFile('filmes.json', JSON.stringify(filmes2), (err) => err ? console.log(err) : console.log("deu certo"));
  
})

app.listen(7070, () => {
    console.log("rodando na porta 8080");
});






