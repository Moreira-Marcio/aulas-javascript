/* principais comando de repetição

- while -> enquanto
- for -> para

são comandos de uso geral, existem em praticamente qualquer linguagem de programação*/

//exemplo 1: while

let contador = 1

while (contador <= 5) {
    console.log("valor do contador é:" + contador);

    contador++; // ++ operador do incremento
    
}

console.log("---\n");

// exemplo 2: for

// for( let contador=1; contador <=10; contador++) {
        // alert("oieee"+contador +"ª vez")
// }

// alert( "chega chato pro caramba!!")

//nomenclatura para variaveis de controle embora possamos dar qualquer nome (como contador por exemplo), geralmente são usadas as letras i, j, ou k (ou outras letras se necessario)

for( let i = 1; i <= 3; i++){
    console.log("valor de 1 é:"+i);
    
}


console.log("\n---");


/* loo´ps explusivos do js para estruturar os dados*/

//for/of -> loop para arrays

const bandas = ["slayer", "pink floyd", "ruch","nightwish", "iron maden"];

for(const valor of bandas){
    console.log(valor);
    
}

let quantidade = bandas.length

// usando o for tradicional
for(let i= 0; i < quantidade ; i++) {
    console.log(bandas[i]);
}




//for/in -> loop para objetos

const pessoa =  {
    nome: "fulano da silva",
    idade:40,
    cidade: "são paulo",
    estado:"sp",
    email: "fulano@provedor.com",
    time: "corinthians"
};

for (const prop in pessoa) {
    console.log(prop);// mostrar somente o nome da propriedade
    console.log(pessoa [prop]);// mostrar soment o valor da propriedade
    
}


/* exercicio

1-  faça um array chamado clientes contendo 3 objetos. cada objeto devera ter uma propriedade identificador(com valores 1,2,3) e uma propriedade nome (com os nomes dos clientes: "goku", "naruto", "shiryu").
*/


const clientes = [
    {
        identificador:1,
        cliente : "Goku",
       
    },
    {   identificador:2,
        cliente: "naruto",
    },
    { identificador:3,
      cliente: "shiryu"
    }
];

/*2- faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada um dos clientes conforme a seguir:
- cliente :goku, id:1
cliente :naruto , id 2
cliente : shiryu , id 3
*/
for(const cliente of clientes){
    console.log(cliente);
    
}

