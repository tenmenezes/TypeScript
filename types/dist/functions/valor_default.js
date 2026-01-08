"use strict";
// Deixando um valor como default ou opcional.
Object.defineProperty(exports, "__esModule", { value: true });
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { nome, idade, email, senha };
    console.log("\n", data, "\n");
}
cadastro("yago@gmail.com", "yago123", "Yago Menezes", 18);
//# sourceMappingURL=valor_default.js.map