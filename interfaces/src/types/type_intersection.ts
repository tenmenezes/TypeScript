// intercessão de tipos

type Info = {
    id: string | number;
    nome: string;
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a União entre os tipos info e categoria

const novoProduto: ProdutoInfo = {
    id: 12345,
    nome: "Teclado",
    slug: "teclado mecânico",
    quantidadeProduto: 10
} 

console.log(novoProduto);