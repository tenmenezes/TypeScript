interface IProdutoProps {
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: IProdutoProps = {
    id: "1",
    nome: "Produto 1",
    descricao: "Descrição do produto 1",
}

produto1.nome = "Produto_1";

console.log(produto1);