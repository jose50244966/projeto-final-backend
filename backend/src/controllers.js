import {User, Autor, Livro} from "./models.js"

//Tela do usuario loggado 
//Método GET
//Caminho /user
const usuarioInfo = async(req, res) => {
    res.send(`<h1>Pagina do Usuario</h1>`)
}

//Registrar novo Usuario 
//Método POST
//Caminho /user
const registrarUsuario = async(req, res) => {

}

//Log in do Usuario 
//Método POST
//Caminho /user/login
const logIn = async(req, res) => {

}

//Lista de todos os Autores
//Método GET
//Caminho /autor
const consultarAutor = async(req, res) => {
    res.send(`<h1>Pagina dos Autores</h1>`)
}

//Registrar novo Autor 
//Método POST
//Caminho /autor
const registrarAutor = async(req, res) => {
    const {primeiro_nome, segundo_nome, nascimento, falecimento} = req.body;
    if(!primeiro_nome || !segundo_nome){
        res.status(400);
        throw new Error("Adicione o primeiro e segundo nome")
    }
    const autor = await Autor.create({
        primeiro_nome,
        segundo_nome,
        nascimento,
        falecimento
    });
    if(autor){
        res.status(201).json(autor)
    }
}

//Consultar Autor por ID
//Método GET
//Caminho /autor/:id
const autorPorId = async(req, res) => {
    res.send(`<h1>Pagina do Autor com id ${req.params.id}</h1>`)
}

//Atualizar informações do Autor
//Método PUT
//Caminho /autor/:id
const atualizarAutor = async(req, res) => {
    
}

//Deletar Autor 
//Método DELETE
//Caminho /autor/:id
const deletarAutor = async(req, res) => {

}

//Lista de todos os Livros
//Método GET
//Caminho /livro
const consultarLivros = async(req, res) => {
    res.send(`<h1>Pagina dos Livros</h1>`)
}

//Registrar novo Livro
//Método POST
//Caminho /livro
const registrarLivro = async(req, res) => {

}

//Consultar Livro por ID
//Método GET
//Caminho /livro/:id
const livroPorId = async(req, res) => {
    res.send(`<h1>Pagina do Livro com id ${req.params.id}</h1>`)
}

//Atualizar Livro
//Método PUT
//Caminho /livro/:id
const atualizarLivro = async(req, res) => {

}

//Deletar Livro
//Método DELETE
//Caminho /livro/:id
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