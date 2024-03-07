const fs = require("fs");
const {
  getTodosOsLivros,
  getLivroPorID,
  insereLivro,
  modificaLivro,
  deleteLivroPorId,
} = require("../servicos/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosOsLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const livro = getLivroPorID(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("id invalido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if (req.body.nome && req.body.id) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("livro inserido com sucesso");
    } else if (req.body.nome) {
      res.status(422);
      res.send("O campo id é obrigatório");
    } else {
      res.status(422);
      res.send("O campo nome é obrigatório");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  const id = req.params.id;
  const body = req.body;
  try {
    if (id && Number(id)) {
      modificaLivro(body, id);
      res.status(200);
      res.send("item modificado com sucesso");
    } else {
      res.status(422);
      res.send("id invalido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deleteLivroPorId(id);
      res.send("livro deletado com sucesso");
    } else {
      res.status(422);
      res.send("id invalido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
