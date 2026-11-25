console.log("1");
setTimeout(() => {
    console.log("2");
}, 100);
console.log("3");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("4");
    }, 100);
});

promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("5");
    });

const dividirporzero = (a, b) => new Promise((resolve, reject) => {
    if (b === 0) {
        reject("Não é possível dividir por zero");
    } else {
        resolve(a / b);
    }

});

dividirporzero(10, 2)
    .then((r) => {
        console.log(r);
    })
    .catch((e) => {
        console.error(e);
    });


const esperar = (tempo) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Esperando ${tempo}ms`);
    }, tempo);

});

async function executar() {
    console.log("Iniciando execução");
    const resultado1 = await esperar(3000);
    console.log(resultado1);
    console.log("Execução finalizada");
}

executar();

const executar2 = async () => {
    console.log("Iniciando execução 2");
    const resultado2 = await esperar(2000);
    console.log(resultado2);
    console.log("Execução 2 finalizada");
}

executar2();


const dividir = async (a, b) => {
    try {
        const resultado = await dividirporzero(a, b);
        console.log(resultado);
    }
    catch (e) {
        console.error(e);
    }
}

dividir(11, 0);
dividir(11, 2);

//sequencial versus parelelo

async function sequencial() {
    const a = await esperar(1000);
    const b = await esperar(1000);
    console.log(`operação em sequencial: ${a}, ${b}`);//levar 2 segundos para executar
}

sequencial();

async function paralelo() {
    const [a, b] = await Promise.all([esperar(1000), esperar(1000)]);
    console.log(`operação em paralelo: ${a}, ${b}`);//levar 1 segundo para executar
}

paralelo();