// for(variavel (index); expressao (vai se repetir enquanto...); ação de controle (expressão de incremento. o que vai acontecer depois que o loop se finaliza)) {
//     bloco de código
// }

for(let i = 1; i <= 10; i++){
    console.log('teste', i) //vai se repetir 5 vezes a partir do zero
}

let spaceship = 'Helmet'; //string length = 6
let newSpaceship = ''; //p armazenar a string 'Hilmit'

//i é abreviatura de index 

for(let i = 0; i < spaceship.length; i++) { //vai executar o for o mesmo número de vezes da string
    // console.log(spaceship[i]);
    // newSpaceship += spaceship[i] copia cada caractere e armazena nessa variavel
    if(spaceship[i] == 'e'){
        newSpaceship += 'i'; //se algum caracter dessa string tiver 'e', substitui por 'i'
    }else{ //nos demais, pode copiar
        newSpaceship += spaceship[i];
    }
}

console.log(newSpaceship);

let naveNome = prompt('Digite o nome da espaçonave');
let char = prompt('Qual caractere deseja substituir?');
let charSub = prompt('Por qual caractere deseja substituir?');
let newChar = '';

for(let i = 0; i < naveNome.length; i++) {
    
    if (naveNome[i] == char) {
        newChar += charSub;
    }else{
        newChar += naveNome[i];
    }
}

alert(newChar);


