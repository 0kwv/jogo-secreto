let listaDeNumerosEscolhidos =[];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas =1;
exirbirMensagemInicial();


function exirbirMensagemInicial(){
    exirbiTextoNaTela('h1','Jogo do Número secreto');
    exirbiTextoNaTela('p','Digite um número entre 1 e 10');
}

function exirbiTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1.2});
}

exirbiTextoNaTela('h1','Jogo do Número secreto');
exirbiTextoNaTela('p','Digite um número entre 1 e 10');

function geraNumeroAleatorio(){
    let numerosEscolhidos = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeNumeroEscolhido = listaDeNumerosEscolhidos.length;
    if (quantidadeDeNumeroEscolhido == numeroLimite){
        listaDeNumerosEscolhidos = [];
    }

    if (listaDeNumerosEscolhidos.includes(numerosEscolhidos)){
        return geraNumeroAleatorio();
    } else{
        listaDeNumerosEscolhidos.push(numerosEscolhidos);
        console.log(listaDeNumerosEscolhidos);
        return numerosEscolhidos;
    }
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exirbiTextoNaTela('h1','acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagenTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exirbiTextoNaTela('p', mensagenTentativa);
        document.getElementById ('reiniciar').removeAttribute('disabled')
    } else{
        if (chute>numeroSecreto){
            exirbiTextoNaTela('p','O número secreto e nenor')
        }else{
            exirbiTextoNaTela ('p', 'O número secreto e maior')
        }
        tentativas++;
        limpaCampo()
    }
}

function limpaCampo (){
        chute = document.querySelector('input')
        chute.value = '';
}
function reiniciajogo(){
    numeroSecreto = geraNumeroAleatorio();
    limpaCampo();
    tentativas = 1;   
    exirbirMensagemInicial();  
    document.getElementById ('reiniciar').setAttribute('disabled',true);
    }
/*




function exirbiOlaNome (){
    let nome = prompt('Digite seu nome!');
    console.log(`Olá ${nome}`);
}
exirbiOlaNome();

function dobroDoNumero(){
    let numero = parseFloat(prompt ('Digite um número'));
    let res = numero * numero;
    alert(`O resuldo de ${numero} * ${numero} é ${res}.`);
}

dobroDoNumero()

function olaMundo (){
    console.log('olá mundo!')
}
 olaMundo();


 function calculadoraIMC(){
    let nome = prompt('Qual seu nome?');
    let peso = parseFloat(prompt ('Qual seu Peso?'));
    let altura = parseFloat(prompt('Qual sua altura'));
    let alturaAoQuadrado = altura**2    ;
    let res = peso/ alturaAoQuadrado;
    alert (`Olá ${nome}, seu IMC é ${res.toFixed(2)}`);
 }
 calculadoraIMC(); */