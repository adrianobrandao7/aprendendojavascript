//Autor: Adriano Brandão
// Resolva no dia1.js e me mande suas respostas (pode colar o código aqui):
// Crie uma const com seu nome e uma let com sua idade. Imprima: Meu nome é X e tenho Y anos. usando template string.
// Escreva uma função ehPar(n) que retorne true se o número for par e false se não for.
// Escreva uma arrow function calcularMedia(a, b, c) que retorne a média dos três números.
// Escreva uma função classificar(nota) que retorne "Aprovado" (>= 7), "Recuperação" (>= 5) ou "Reprovado".
// Sem rodar o código, diga o que cada linha imprime e depois confira:


const nome = "Adriano";
let idade = 30;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); // isso template string vai imprimir: Meu nome é Adriano e tenho 30 anos.

function ehPar(n) {
    if (n % 2 === 0) {
        return console.log("Numero par");
    } else {
        return console.log("Numero impar");
    }
}

 ehPar(4);


 const calcularMedia = (a, b, c) => {
    return (a + b + c) / 3;
 } //Exemplo de arrow function que calcula a média de 3 números.

 console.log(` Apenas caculo da media (6,7,9):  ${calcularMedia(6, 7, 9)}`); // isso vai imprimir: A media é 7

const classificarAluno = (calcularMedia) => {
    if(calcularMedia>=7){
        return "Aprovado";

    }else if(calcularMedia >=5){
        return  "Em recuperação";
        
    }else{
        return "Reprovado"
    }

}

console.log(`A media (4,7,7) é : ${calcularMedia(4,7,7)} e classificação é: ${classificarAluno(calcularMedia(4, 7, 7))}`);

