"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoUsuario = {
    nome: "Yago Menezes",
    email: "yago@email.com",
    idade: 18,
    status: true,
};
// console.log(novoUsuario);
// Função que recebe um objeto do tipo ICadastroProps e retorna o nome do usuário.
function novoUser(usuario) {
    console.log(usuario.nome);
}
novoUser({
    nome: "Yago Menezes",
    email: "yago@email.com",
    idade: 18,
    status: true,
});
//# sourceMappingURL=opcional.js.map