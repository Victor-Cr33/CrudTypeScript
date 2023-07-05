"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postRepository_1 = __importDefault(require("../repositories/postRepository"));
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = yield postRepository_1.default.getPosts();
        res.json(post);
    });
}
function getPostById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const post = yield postRepository_1.default.getPostById(parseInt(id));
        if (post) {
            res.json(post);
        }
        else {
            res.sendStatus(404);
        }
    });
}
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = req.body;
        const result = yield postRepository_1.default.addPost(post);
        if (result) {
            res.status(201).json(result);
        }
        else {
            res.sendStatus(400);
        }
    });
}
function putPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const post = req.body;
        const result = yield postRepository_1.default.updatePost(parseInt(id), post);
        if (result) {
            res.json(result);
        }
        else {
            res.sendStatus(404);
        }
    });
}
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const success = yield postRepository_1.default.deletePost(parseInt(id));
        if (success) {
            res.sendStatus(204);
        }
        else {
            res.sendStatus(404);
        }
    });
}
exports.default = {
    getPosts,
    getPostById,
    createPost,
    putPost,
    deletePost
};
