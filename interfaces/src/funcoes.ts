interface ICursoProps {
    id: string;
    nome: string;
    preco: number;

    // Definir apenas a função e o que ela deve esperar e retornar
    promocao: (preco: number) => void;

}

function mostraPromocao(preco: number): void {
    console.log(`\nPromoção do curso por apenas R$${preco},00 reais!\n`);
}

// const novoCurso: ICursoProps = {
//     id: "1",
//     nome: "Curso de TypeScript",
//     preco: 750,
//     promocao: mostraPromocao,
// //     promocao: (preco: number): void => {
// //     console.log(`\nPromoção do curso por apenas R$${preco},00 reais!\n`);
// // }
// }

// console.log(novoCurso);

// console.log(novoCurso.promocao(350));

interface ISomaProps {
    (valor1: number, valor2: number): number;
}

let somaNumeros: ISomaProps = (valor1: number, valor2: number): number => {
    console.log("Resultado: ", valor1 + valor2);
    return valor1 + valor2;
}

const resultado = somaNumeros(10, 20);

console.log("Resultado da soma: ", resultado);