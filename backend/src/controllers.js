

//Tela do usuario loggado 
//Metodo GET
//Rota /user
const usuarioInfo = async(req, res) => {
    res.send(`<h1>Pagina do Usuario</h1>`)
}

//Registrar novo Usuario 
//Metodo POST
//Rota /user
const registrarUsuario = async(req, res) => {

}

//Log in do Usuario 
//Metodo POST
//Rota /user/login
const logIn = async(req, res) => {

}

//Lista de todos os Autores
//Metodo GET
//Rota /autor
const consultarAutor = async(req, res) => {
    res.send(`<h1>Pagina dos Autores</h1>`)
}

//Registrar novo Autor 
//Metodo POST
//Rota /autor
const registrarAutor = async(req, res) => {

}

//Consultar Autor por ID
//Metodo GET
//Rota /autor/:id
const autorPorId = async(req, res) => {
    res.send(`<h1>Pagina do Autor com id ${req.params.id}</h1>`)
}

//Atualizar informações do Autor
//Metodo PUT
//Rota /autor/:id
const atualizarAutor = async(req, res) => {
    
}

//Deletar Autor 
//Metodo DELETE
//Rota /autor/:id
const deletarAutor = async(req, res) => {

}

//Lista de todos os Livros
//Metodo GET
//Rota /livro
const consultarLivros = async(req, res) => {
    res.send(`<h1>Pagina dos Livros</h1>`)
}

//Registrar novo Livro
//Metodo POST
//Rota /livro
const registrarLivro = async(req, res) => {

}

//Consultar Livro por ID
//Metodo GET
//Rota /livro/:id
const livroPorId = async(req, res) => {
    res.send(`<h1>Pagina do Livro com id ${req.params.id}</h1>`)
}

//Atualizar Livro
//Metodo PUT
//Rota /livro/:id
const atualizarLivro = async(req, res) => {

}

//Deletar Livro
//Metodo DELETE
//Rota /livro/:id
const deletarLivro = async(req, res) => {

}

export { 
    usuarioInfo,
    registrarUsuario,
    logIn,
    consultarAutor,
    registrarAutor,
    autorPorId,
    atualizarAutor,
    deletarAutor,
    consultarLivros,
    registrarLivro,
    livroPorId,
    atualizarLivro,
    deletarLivro
}