interface ICadastroProps {
    nome: string;
    email: string;
    idade?: number;
    status: boolean;
}

const novoUsuario: ICadastroProps = {
    nome: "Yago Menezes",
    email: "yago@email.com",
    idade: 18,
    status: true,
}

// console.log(novoUsuario);

// Função que recebe um objeto do tipo ICadastroProps e retorna o nome do usuário.
function novoUser(usuario: ICadastroProps): void {
    console.log(usuario.nome);
}

novoUser({
    nome: "Yago Menezes",
    email: "yago@email.com",
    idade: 18,
    status: true,
});