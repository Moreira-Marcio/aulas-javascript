
//declaração de um array
let alunos = ["marcelo", "milena" , "margiore"];

//exibindo a estrutura do Array
console.log(alunos);

//Acessando um elemento especifico do array

console.log(` ${alunos[1]} é minha esposa`);

//mini exercicio  
//1- crie um novo array contendo o nome de 7 coisas que voce gosta (artista, livro, musica etc.)
//2- em seguida, mostre no console uma frase personalizada indicando o nome do segundo,quinto e o setimo elemento do array. Use concatenação ou template string,

let filmes = [ 
    "o poderoso chefão",
    "de volta pro futuro",
    "coach carter",
    "bastardos inglorios",
    "a vida é bela",
    "clube da luta",
    "curtindo a vida a doidado"

]

console.log(filmes);

console.log(`Filmes como "${filmes[1]}" é um dos grandes classicos do cinema, outros como "${filmes[6]}" é considerado uma aula de como literalmente curtir a vida, mas "${filmes[4]}" é um filme lindo e inspirador do começo ao fim. `);



//array como matriz de 2 dimensoes

const tecnologias= [
    ["HTML5","CSS","JavaScript"],
    ["Figma","Photoshop"],
    ["PHP","Node.js","SQL","Express", ["Apache","IIS"]]
];

//console.log(tecnologias);

console.log(tecnologias[0] [2] );
console.log(tecnologias [1] [0]);
console.log(tecnologias [2] [3]);
console.log(tecnologias[0] [0]);
console.log(tecnologias [2] [4][0]);









