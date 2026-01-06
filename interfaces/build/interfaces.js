"use strict";
// let loja: object;
Object.defineProperty(exports, "__esModule", { value: true });
const BurguerKing = {
    nome: "Burguer King",
    endereco: "Rua das Flores, 123",
    status: true,
};
// console.log("\n", BurguerKing, "\n");
// function novaLoja(nome: string, endereco: string, status: boolean): void {
//     console.log(`\nNome: ${nome}\nEndereço: ${endereco}\nStatus: ${status}\n`);
// }
// novaLoja("Burguer King", "Rua das Flores, 123", true);
// Função que recebe um objeto do tipo ILojaProps e retorna o nome, endereço e status da loja.
function novaLoja({ nome, endereco, status }) {
    console.log(`\nNome: ${nome}\nEndereço: ${endereco}\nStatus: ${status}\n`);
}
novaLoja({
    nome: "Burguer King",
    endereco: "Rua das Flores, 123",
    status: true,
});
//# sourceMappingURL=interfaces.js.map