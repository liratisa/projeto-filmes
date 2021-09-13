const express = require('express');
const app = express();
const filmes = require('./filmes2.json');

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
    let filtrado = filmes.find(filme => filme.id == idRequest);

    let indice = filmes.indexOf(filtrado);
    filmes.splice(indice, 1);  
    
    fs.writeFile('filmes.json', JSON.stringify(filmes2), (err) => err ? console.log(err) : console.log("deu certo"));
  
})

app.listen(8080, () => {
    console.log("rodando na porta 8080");
});






