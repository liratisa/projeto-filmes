let velocity = 50;
let acc = 5;

while(velocity <= 100) { //até 100km/s
    console.log(`Acelerando: estamos a ${velocity} por segundo`);
    velocity += acc //velocity = velocity + acc; n cria uma variável, mas sim incrementa uma já existente
}

let constellation = 'Andromeda';
let position = 0; 
let constellationLength = constellation.length;

while(position < constellationLength) { //enquanto a posição for menor que o tamanho da string
    if(constellation[position] == 'a' || constellation[position] == 'A') { //posição inicial em zero possui o caractere 'a' ou o 'A'
        // console.log(position);
    }
    position += 1; //cada iteração será feita com a posição +1 (0+1)
}
//console: 0 e 8

let nomeNave = prompt('Piloto, qual o nome da nave?');

let dobra = 0;

let chosenOpt = '';

chosenOpt = prompt(`Deseja entrar em dobra espacial com a nave ${nomeNave}?\n1. Sim\n2. Não`);

while(chosenOpt == '1'){    
    dobra += 1;
    chosenOpt = prompt('Deseja realizar a próxima dobra?\n1. Sim\n2. Não')
}

// alert('Nave: ' + nomeNave + '\nQuantidade de dobras: ' + dobra);
alert(`A nave ${nomeNave} tem ${dobra} dobras`);





