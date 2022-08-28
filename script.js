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
        return ("Isósceles")

    } else {
        return ("Escaleno")

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

/*Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

const Bhaskara = (ax2, bx, c) => {
    const delta = bx ** 2 - 4 * ax2 * c
    if (delta >= 0) {
        const resultado = [];
        v1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        res.push(v1)
        v2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        res.push(v2)
        return resultado
    } else {
        return ("Delta é negativo")
    }
}

/* Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 
* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
    * Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
    * Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. */

const SistemaDeNotas = (notaAluno) => {
    let arredondarNota = Math.ceil(notaAluno / 5) * 5
    if (notaAluno > 38 && notaAluno % 5 == 0) {
        return ("Aluno Aprovado, sua nota é " + notaAluno)
    }
    if (notaAluno > 38 && notaAluno % 5 != 0 && notaAluno - arredondarNota) {
        return ("Aluno Aprovado, sua nota é " + arredondarNota)
    }
    if (notaAluno > 38 && notaAluno % 5 != 0 && notaAluno - (arredondarNota > 3)) {
        return ("Aluno Aprovado, sua nota é " + notaAluno)
    }

    else {
        return ("Aluno Reprovado, sua nota é" + notaAluno)
    }

}


/* Questão 04 - LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.
Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.
Exemplo de retorno:
Entrada:
45
Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19,
Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 
37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura. */

const LuidyMoura = (NumeroLimite) => {
    let Resultado = []
    for (let i = 1; i <= NumeroLimite; i++) {
        if (i % 5 == 0) {
            Resultado.push("Luidy")
        }
        else if (i % 9 == 0) {
            Resultado.push("Moura")
        }
        else if (i % 5 == 0 && i % 9 == 0) {
            Resultado.push("LuidyMoura")
        }
        else {
            Resultado.push(i)
        }
    }
    return (Resultado)
}
