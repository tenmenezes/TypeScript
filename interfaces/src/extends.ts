/*
    Supondo que temos um jogo e nesse jogo a gente tem uma dlc
*/

interface IJogoProps {
    readonly id: string;
    nome: string;
    desc: string;
    plataforma: string[]; // PC, PS, XBOX, Mobile, etc
}

const left4Dead: IJogoProps = {
    id: "123",
    nome: "Left 4 Dead 2",
    desc: "Jogo de ação e tiro",
    plataforma: ["PS5", "PC"]
}

// console.log(left4Dead); 

interface IDLC extends IJogoProps{
    jogoOriginal: IJogoProps;
    novoConteudo: string[];
}

const left4Dead_DLC: IDLC = {
    id: "90",
    nome: "Left 4 Dead - Novos Mapas",
    desc: "4 Novos mapas disponíveis",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop", "+5 Hours in Game", "Novas Conquistas"],
    jogoOriginal: left4Dead
}

console.log(left4Dead_DLC);