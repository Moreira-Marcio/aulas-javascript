//funções de manipulação

// querySelector() é uma função para selecionar um unico elemento na pagina (dom).

// querySelectorAll() é uma função para selecionar varios elementos  na pagina

//nos dois casos, a seleção é feita usando seletores comuns ao que fazemos no CSS.

/* Exemplos: */

const titulo = document.querySelector("h1");

const textoDom = document.querySelector(".texto-dom");

const subtitulos = document.querySelectorAll("h2");
// console.log(subtitulos);
// console.log(subtitulos[2]);
const varios = document.querySelectorAll("p, img, button");

console.log(varios);

//Modificando elementos do Dom

titulo.textContent = "ola JavaScript";
textoDom.innerHTML = "<i> o marcio sera reprovado!</i>"

// Selecionar todos os links de referencia  e colocar neles o atributo target valendo blank

const links = document.querySelectorAll(".lista-de-referencias a");

console.log(links);

// links[0].setAttribute("target", "_blank"); (exeplo se fosse um por um)

for ( const link of links){
    //versao 1
    console.log(link.setAttribute("target","_blank"));
    
    //versao 2 (usando atributos via propriedade) - mais antiga, vale para atributos nativos do html
    // link.target = "_blank";
}


//Manipulando eventos

const ex1 = document.querySelector("#exemplo01")
// poderiamos ter usado a função getElementeById em vez da querySelector .A diferença é que ela so funciona para relação atyraves do ID. obs:ao usa-la nao coloque #
// cont ex1= document.gtElementById("exemplo01")
const msg = document.querySelector("#mensagem")
const pagina = document.querySelector("body");

// ouvinte de evento (evente listener) aplicado ao evento alvo do evento desejado ("clic") e uma função para executar as ações a partir do evento
ex1.addEventListener ("click", function(){
    msg.innerHTML = "ola 👽!";

    // modificar a pagina
    pagina.style.fontFamily = "verdana";
});

// ouvinte de evento pode voltar ao normal ( sem texto e com a fonte padrao na pagina), o evento ocorrera ao cllpcar duas vezes no paraggrafo da mensagem.

msg.addEventListener ("dblclick", function(){
    msg.innerHTML= "";//removendo o conteudo do paragrafo
    pagina.style.fontFamily = "initial"; //voltando para a fonte padrao
})


// exemplo 2 = modo noturno

const botaoAtivar = document.querySelector ("#ativar");
botaoAtivar.addEventListener("click", function(){
    // usamos o toggle do classList para alternar a aplicação/remoção da classe "noturno".Na pratica vira um liga/desliga
    pagina.classList.toggle("noturno");

    // Desafio: faça aqui mesmo: trocar o testpo do botao. SE a pagina estiver com a classe Noturno aplicada  o botaoi deve aparecer desativar
    
    if (pagina.classList == "noturno"){
        botaoAtivar.innerHTML= "Desativar"
        

    }else{
        botaoAtivar.innerHTML = "Ativar"

    }
})

// sobre o duplo sinal de igual e triplo sinal de igual 

let a = "10";
let b = 10;

let resultado = a === b;
console.log(resultado);

//== compara valor 
// === compara valores e tipo de dado