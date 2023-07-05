"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(nome, descricao, categoria) {
        this.id = Post.nextId++;
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}
Post.nextId = 1;
exports.default = Post;
