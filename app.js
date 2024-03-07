const express = require("express");
const app = express();

const rotaLivro = require('./rotas/livro')

const port = 8000;

app.use(express.json())//passar para a aplicação a informação que agora ela consegue receber JSON

app.use('/livros', rotaLivro)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})