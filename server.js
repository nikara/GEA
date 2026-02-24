// import http from "http";

import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Curso De Node.js",
    "/livros":"Entrei na rota livros",
    "/autores":"Qualquer coisa"
};

server.listen(PORT,() =>{
    console.log("Servidor escutando !");
});

