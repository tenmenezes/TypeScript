// function totalVendas(
//   valor1: number,
//   valor2: number,
//   valor3: number,
//   valor4: number
// ): number {
//     const total = valor1 + valor2 + valor3 + valor4;

//     console.log(total);

//     return total;
// }

// totalVendas(10, 30, 50, 10);


function totalVendas(...vendas: number[]): void {
    const quantidadeVendas = vendas.length;

    console.log(`Você fez ${quantidadeVendas} vendas hoje!`)
}

// totalVendas(10, 30, 25, 15, 90, 30);

function mostraNomes(...nomes: string[]): void {
    let totalNomes = nomes.length;

    console.log(`\nTotal de Nomes: ${totalNomes}\n\n`);

    let n: number = 0;

    nomes.map( nome => {
        console.log(`Nome ${n += 1}: ${nome}\n`);
    })
}

mostraNomes("Yago", "Anderson", "Raissa", "Márcia", "Raphael")