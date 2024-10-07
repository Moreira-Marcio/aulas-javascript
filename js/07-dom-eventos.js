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

const ex1 = document.querySelector("#exeplo01")
const msg = document.querySelector("#mensagem")

ex1.addEventListener("click", function(){
    msg.innerHTML = "ola 👽!";
});
