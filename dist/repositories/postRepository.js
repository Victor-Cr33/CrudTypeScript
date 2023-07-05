"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("../models/post"));
const posts = [];
function addPost(post) {
    return new Promise((resolve, reject) => {
        const newPost = new post_1.default(post.nome, post.descricao, post.categoria);
        posts.push(newPost);
        return resolve(newPost);
    });
}
function getPostById(id) {
    return new Promise((resolve, reject) => {
        return resolve(posts.find(c => c.id === id));
    });
}
function getPosts() {
    return new Promise((resolve, reject) => {
        return resolve(posts);
    });
}
function updatePost(id, newPost) {
    return new Promise((resolve, reject) => {
        const index = posts.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newPost.nome && posts[index].nome !== newPost.nome) {
                posts[index].nome = newPost.nome;
            }
            if (newPost.descricao && posts[index].descricao !== newPost.descricao) {
                posts[index].descricao = newPost.descricao;
            }
            if (newPost.categoria && posts[index].categoria !== newPost.categoria) {
                posts[index].categoria = newPost.categoria;
            }
            return resolve(posts[index]);
        }
        return resolve(undefined);
    });
}
function deletePost(id) {
    return new Promise((resolve, reject) => {
        const index = posts.findIndex(c => c.id === id);
        if (index >= 0) {
            posts.splice(index, 1);
            return resolve(true);
        }
        return resolve(false);
    });
}
exports.default = {
    addPost,
    getPostById,
    getPosts,
    updatePost,
    deletePost
};
