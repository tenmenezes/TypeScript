// let loja: object;

// loja = {
//     nome: "Loja do Matheus",
//     endereco: "Rua das Flores, 123",
//     status: true,
// }

// Interface é um contrato que define as propriedades e o tipo de cada propriedade.
interface ILojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const BurguerKing: ILojaProps = {
  nome: "Burguer King",
  endereco: "Rua das Flores, 123",
  status: true,
};

// console.log("\n", BurguerKing, "\n");

// function novaLoja(nome: string, endereco: string, status: boolean): void {

//     console.log(`\nNome: ${nome}\nEndereço: ${endereco}\nStatus: ${status}\n`);

// }

// novaLoja("Burguer King", "Rua das Flores, 123", true);

function novaLoja({ nome, endereco, status }: ILojaProps): void {
  console.log(`\nNome: ${nome}\nEndereço: ${endereco}\nStatus: ${status}\n`);
}

novaLoja({
  nome: "Burguer King",
  endereco: "Rua das Flores, 123",
  status: true,
});
