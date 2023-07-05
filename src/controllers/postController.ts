import {Request, Response} from 'express';
import Post from '../models/post';
import postRepository  from '../repositories/postRepository';

async function getPosts(req:Request, res: Response){
    const post = await postRepository.getPosts();
    res.json(post);
   
}

async function getPostById(req:Request, res: Response){
    const id = req.params.id;
    const post = await postRepository.getPostById(parseInt(id));
    if(post){
        res.json(post);
    }
    else{
        res.sendStatus(404);
    }
}

async function createPost(req:Request, res: Response){
    const post = req.body as Post;
    const result = await postRepository.addPost(post);
    if(result){
        res.status(201).json(result);
    }
    else{
        res.sendStatus(400);
    }
}

async function putPost(req:Request, res: Response){
    const id = req.params.id;
    const post = req.body as Post;
    const result = await postRepository.updatePost(parseInt(id), post);
    if(result){
        res.json(result);
    }
    else{
        res.sendStatus(404);
    }
}

async function deletePost(req:Request, res:Response){
    const id = req.params.id;
    const success = await postRepository.deletePost(parseInt(id));
    if(success){
        res.sendStatus(204);
    }
    else{
        res.sendStatus(404);
    }
}

export default{
    getPosts,
    getPostById,
    createPost,
    putPost,
    deletePost
}
