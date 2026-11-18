//Autor: Adriano Brandão
// Com map, crie um array só com os nomes dos produtos.
// Com filter, pegue só os produtos em estoque (estoque > 0).
// Com find, encontre o produto de id 3 e imprima o nome dele.
// Com reduce, calcule o valor total do estoque (soma de preco * estoque de todos).
// Usando spread, crie um novo objeto igual ao produto “Mouse”, mas com estoque: 25. Confira que o array original não mudou.
// Desafio: encadeie filter e map para obter só os nomes dos produtos que custam menos de 100.


// treinando e entendendo array e objetos
const frutas = ["maçã", "Banana", "Uva"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas.length);

frutas.push("Laranja");
console.log(frutas);
frutas.pop();
console.log(frutas);


const pessoa = {
    nome: "Adriano",
    idade: 36,
    cidade: "Fortaleza",
}

console.log(pessoa.nome);
pessoa.profisao = "Dev";
console.log(pessoa);


const usuarios = [
    { id: 1, nome: "Ana", idade: 10, ativo: true },
    { id: 2, nome: "Bia", idade: 17, ativo: false },
    { id: 3, nome: "Caio", idade: 32, ativo: true },
]

usuarios.forEach((usuario) => {
    console.log(usuario)

});


const arraynomes = usuarios.map((u) => u.nome);

console.log(`Map apenas com nome ${arraynomes}`);

const idadeemmeses = usuarios.map((u) => u.idade * 12);

console.log(`Idades em meses:  ${idadeemmeses}`);


const maiores = usuarios.filter((u) => u.idade > 18);

console.log(maiores);

const somaidade = usuarios.reduce((acumulador, u) => acumulador + u.idade, 0);
console.log(somaidade);


const { nome, idade } = usuarios[0];
console.log(nome, idade); // "Ana" 25

const [primeira, segunda] = ["maçã", "banana", "uva"];
console.log(primeira, segunda); // "maçã" "banana"


const a = [1, 2, 3];
const b = [...a, 4, 5, 6, 7];

const pesssoa2 = { nome: "Talita", idade: 25 }
const pessoa2atuliazada = { ...pesssoa2, idade: 35, profissao: "dev" }
console.log(pesssoa2);
console.log(pessoa2atuliazada);


const numeros = [0, 1, 2, 3, 4, 7];

// Mesmo callback para os dois métodos
const maiorQueDois = (num) => num > 2;

const resultadoMap = numeros.map(maiorQueDois);
const resultadoFilter = numeros.filter(maiorQueDois);

console.log("Original:", numeros);
console.log("Com map:", resultadoMap);
console.log("Com filter:", resultadoFilter);


//RESOLUÇÃO DOS EXERCICOS

const produtos = [
    { id: 1, nome: "Teclado", preco: 150, estoque: 10 },
    { id: 2, nome: "Mouse", preco: 80, estoque: 0 },
    { id: 3, nome: "Monitor", preco: 900, estoque: 5 },
    { id: 4, nome: "Cabo USB", preco: 20, estoque: 50 },
];

//1. Com map, crie um array só com os nomes dos produtos.

const nomeProdutos = produtos.map((u) => u.nome);
console.log(`Nomes dos produtos:  ${nomeProdutos}`);

//Com filter, pegue só os produtos em estoque (estoque > 0).

const emEstoque = produtos.filter((u) => u.estoque > 0);
console.log(emEstoque);

//Com find, encontre o produto de id 3 e imprima o nome dele.

const  produtoid3 = produtos.find((u) => u.id === 3);

console.log(`Porduto id 3: ${produtoid3.nome}`);


//Com reduce, calcule o valor total do estoque (soma de preco * estoque de todos).

const valorTotalEstoque = produtos.reduce((acumulador, u)=> acumulador + (u.estoque * u.preco), 0);
console.log(valorTotalEstoque);

//Usando spread, crie um novo objeto igual ao produto “Mouse”, mas com estoque: 25. Confira que o array original não mudou.

const mouse = produtos.find((u)=> u.id === 2 ); //criamos objeto apenas mouse
const mouseatualizado = {...mouse, estoque: 25}; // criamos nono objeto atualizado
console.log(mouse); //objero criado spread não mudou
console.log(mouseatualizado);//atualizado
console.log(produtos); // array original não mudou


//Desafio: encadeie filter e map para obter só os nomes dos produtos que custam menos de 100.

const produtosBaratos = produtos
    .filter((u)=> u.preco < 100)
    .map((u)=> u.nome);

    console.log(produtosBaratos);




