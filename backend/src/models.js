import mongoose from "mongoose";
const {Schema} = mongoose

// User Schema
const userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
const User = mongoose.model("User", userSchema);

//Autor Schema
const autorSchema = new Schema({
    primeiro_nome: {
        type: String,
        required: true
    },
    segundo_nome: {
        type: String,
        required: true
    },
    nascimento: {
        type: Date
    },
    falecimento: {
        type: Date
    }
});
const Autor = mongoose.model("Autor", autorSchema);

// Livro Schema
const livroSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Autor',
        required: true
    },
    primeira_publicacao: {
        type: Date,
        required: true
    },
    isbn: {
        type: String,
        required: true,
    },
    genero: {
        type: String
    },
    resumo: {
        type: String
    }
});
const Livro = mongoose.model("Livro", livroSchema);

export {
    User,
    Autor,
    Livro
}