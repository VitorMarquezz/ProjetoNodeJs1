const fs = require("fs");

function getTodosOsLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorID(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livrosFiltrados = livros.filter((livro) => livro.id === id);
  return livrosFiltrados;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const novaListaDeLivros = [...livros, livroNovo];
  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

  const conteudoMudado = {
    ...livrosAtuais[indiceModificado],
    ...modificacoes,
  };

  livrosAtuais[indiceModificado] = conteudoMudado;

  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function deleteLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livrosFiltrados = livros.filter((livro) => livro.id !== id);

  fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
  getTodosOsLivros,
  getLivroPorID,
  insereLivro,
  modificaLivro,
  deleteLivroPorId,
};
