const express = require("express");
const app = express();

// Função Callback executa ela ao final
// Requisicao e Resposta
app.get("/", function (request, response) {
    response.send("Hello World");
});

// Porta de Entrada
app.listen(3000, function () {
    console.log("Inicializado com sucesso. Estamos na porta 3000");
});
