// Deixando um valor como default ou opcional.


function cadastro(
  email: string,
  senha: string,
  nome = "Aluno",
  idade?: number
): void {
  let data = { nome, idade, email, senha };

  console.log("\n", data, "\n");
}

cadastro("yago@gmail.com", "yago123", "Yago Menezes", 18);