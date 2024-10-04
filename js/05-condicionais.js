/*  comandos condicionais
if -> se
else -> se nao  */

// Exemplo 1:condicional simples

let numero = 5;

if (numero > 10) {
    console.log(numero)
}

// exeplo 2: condicional composta

let aluno = "klaibert";
let idade = 18

//logica: verificar se o aluno é maior de idade ou maior de idade

if (idade < 18) {
    console.log("é maior de idade")
} else {
    console.log("é maior de idade")
}

console.log("---");


// exercicio

// 1- crie duas variaveis conforme a segur:
// nota 1 (contendo um valor de 0 a 10)
// nota 2 (contendo outro valor  de0 a 10)

let nota1 = 10
let nota2 = 4

//2- crie uma variavel chamada media que recebera o valor calculado da media das duas notas informadas . Dica voce deve somar as duas notas e depois dividir por 2

let media = nota1 + nota2
let resultado = media / 2

//3- programe uma condicional que verifique o valor da media da media calculada. se a media for igual ou maior a 7 mostre aprovados caso contrario mostre reprovados

if (resultado >= 7) {

        console.log(`${resultado} aprovado`);


} else {
    console.log(`${resultado} reprovado`);

}

/* shorthand if/else (if/else "curto/abreviado")*/

let situacao = media >= 7 ? "aprovado" : "reprovado";

console.log(situacao);




