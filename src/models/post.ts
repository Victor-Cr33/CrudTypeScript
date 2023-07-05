export default class Post {
    
    id: number;
    nome: string;
    descricao: string;
    categoria : string;

    private static nextId= 1;

    constructor(nome:string,descricao:string, categoria:string){
        this.id = Post.nextId++;
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;

    }

}