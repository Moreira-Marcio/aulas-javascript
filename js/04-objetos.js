//exemplo 1: objeto com dados de uma pessoa

const pessoa = {
    nome: "Chaves",
    idade: 10,
    cidade: "São Paulo",
    estado: "SP"
};

//exibindo dados 

console.log(pessoa);

//acessando determinada propriedade

console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}`);

//exemplo 2 objeto com array

const livro = {
    titulo: "Senhor dos Aneis",
    autor: "J.R.R. Tokien",
    velumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
}

const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Senhor dos Anéis",
        autor: "J.R.R. Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    }
];

console.log(livros[1].autor)



const aluno ={ 
    nomeCompleto: "marcelo moreira",
    nascido:" 07/11/84",
    telefones: ["(11) 5555-5555","(11)9999-9999"],
    endereco: {
        rua:"mercedes lopes",
        numero: "422",
        bairro: "penha"
    }

}

console.log(`${aluno.nomeCompleto}, com celular ${aluno.telefones [1]}, reside na ${aluno.endereco.bairro}. `);
