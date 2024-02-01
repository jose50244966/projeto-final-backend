import express from "express";
import {
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

} from "./controllers.js"
const router = express.Router();

//Router Home
router.get("/", (req, res) => {
    res.send(`<h1> HOME PAGE</h1>`)
})
//Router Usuario
router.route("/user").get(usuarioInfo).post(registrarUsuario);
router.route("/user/login").post(logIn);

// Router Autor
router.route("/autor").get(consultarAutor).post(registrarAutor);
router.route("/autor/:id").get(autorPorId).put(atualizarAutor).delete(deletarAutor);

//Router Livro
router.route("/livro/").get(consultarLivros).post(registrarLivro);
router.route("/livro/:id").get(livroPorId).put(atualizarLivro).delete(deletarLivro);


export default router;