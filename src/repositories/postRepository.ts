import Post from '../models/post';

const posts: Post[] = [];


function addPost(post: Post): Promise<Post>{
    return new Promise((resolve, reject) =>{
        const newPost = new Post(post.nome,post.descricao, post.categoria);
        posts.push(newPost);

        return resolve(newPost);
    })
}

function getPostById(id:number): Promise<Post | undefined>{
    return new Promise((resolve, reject) =>{
        return resolve(posts.find(c => c.id===id));
    })
}

function getPosts(): Promise<Post[]>{
    return new Promise((resolve, reject)=>{
        return resolve(posts);
    })
}

function updatePost(id:number, newPost: Post): Promise<Post | undefined>{
    return new Promise((resolve, reject)=>{
        const index = posts.findIndex( c => c.id === id);
        if( index >= 0){
            if(newPost.nome && posts[index].nome !== newPost.nome){
                posts[index].nome = newPost.nome;
            }
            if(newPost.descricao && posts[index].descricao !== newPost.descricao){
                posts[index].descricao = newPost.descricao;
            }
            if(newPost.categoria && posts[index].categoria !== newPost.categoria){
                posts[index].categoria = newPost.categoria;
            }

            return resolve(posts[index]);
        }
        return resolve(undefined);
    })
}
function deletePost(id:number): Promise<boolean>{
    return new Promise((resolve, reject)=>{
        const index = posts.findIndex( c=>c.id ===id);
        if(index >= 0){
            posts.splice(index,1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    addPost,
    getPostById,
    getPosts,
    updatePost, 
    deletePost
}


