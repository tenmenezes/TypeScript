// interface ITecnologiaProps {
//     id: string;
//     nome: string;
//     slug?: (string | number)[];
// }

// let tecnologia1: ITecnologiaProps = {
//     id: "1",
//     nome: "PHP",
//     slug: ["PHP_do_zero", "PHP_6.0", "PHP", 12],
// }

// Array de interfaces 

interface ITecnologiaProps {
  id: string;
  nome: string;
  desc?: string
}

interface INomesProps {
    tecnologia: ITecnologiaProps[];
} 

let frontend: INomesProps = {
    tecnologia: [
        { id: "12", nome: "React.js", desc: "Library for creating interfaces"},
        { id: "43", nome: "Vue.js", desc: "Framework Front-End"},
    ]
}

console.log(frontend.tecnologia);
