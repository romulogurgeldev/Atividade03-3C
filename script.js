/* Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.
Crie um código JS que receba os comprimentos dos lados de um triângulo através de 
inputs e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo 
    deve-se abstrair as condições matemáticas de existência de um triângulo) */
const TipoTriangulo = (lado01, lado02, lado03) => {

    if (lado01 === lado02 && lado02 === lado03) {
        return ("Equilátero")
    }
    if (lado01 === lado02 && lado01 !== lado03 || lado02 === lado03 && lado02 !== lado01 || lado03 === lado01 && lado03 !== lado02) {
        return ("Isósceles");

    } else {
        return ("Escaleno");
    }
}

const exibirResultado = (e) => {
    e.preventDefault()
    const lado01 = document.getElementById('lado01').value;
    const lado02 = document.getElementById('lado02').value;
    const lado03 = document.getElementById('lado03').value;

    const resultado = TipoTriangulo(lado01, lado02, lado03)

    document.getElementById('tela').innerHTML = resultado;

}


document.getElementById('botaoVerificar').addEventListener('click', exibirResultado);
