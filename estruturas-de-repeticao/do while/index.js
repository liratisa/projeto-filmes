// let velocity = 110;
let velocity = 90;
let acc = 5;

//diferença entre while e do while: o while avalia a condição antes e o do while depois. por conta disso, ele mostra a msg do console ainda que a condição n seja satisfeita 
do {
    console.log(`Acelerando: estamos a ${velocity} km/s`);
    velocity += acc; //incrementa 5 a cada iteração
} while(velocity<=100);
//fazer enquanto a condição for satisfeita. nesse caso, vai executar enquanto velocity <= 100 

//usando o break

let spaceshipName = 'Supernova';

//encerra execução quando encontrar o caractere 'o'

for(let i = 0; i < spaceshipName.length; i++) {
    if(spaceshipName[i] == 'o'){
        break
    }
    console.log(spaceshipName[i])
}

//retorna o nome invertido até o caractere 'proibido'
let nomeNave = prompt('Digite o nome desejado');
let invertida = '';

for(let i = nomeNave.length - 1; i >= 0; i--){ //loop decremental com concatenação
//o index é o comprimento da string menos 1; enquanto i for maior ou igual a zero; vai decrementar 
    if(nomeNave[i] == 'e'){
        break //encerra a execução quando um caracter for igual a 'e'
    }
    invertida += nomeNave[i] 
}

alert(`${nomeNave} é o nome original da nave. ${invertida} é o nome da nave de trás pra frente parando no caractere 'e'`);





