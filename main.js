// Mensagem inicial
alert('Olá! A seguir vamos pedir que você insira suas notas e iremos calcular sua média para informar se você foi aprovado ou reprovado.')

// Pedindo para que o aluno insira o valor das suas notas em 3 matérias
const nota1 = Number(prompt('Insira sua nota na disciplina de Inglês'));
const nota2 = Number(prompt('Insira sua nota na disciplina de Matemática'));
const nota3 = Number(prompt('Insira sua nota na disciplina de Artes'));

// Calculando a média do aluno
const media = (nota1 + nota2 + nota3) / 3;

/*
    Informando a média e condição do aluno.
    Caso ele tenha obtido média maior ou igual a 7 ele estará aprovado.
    Caso contrário, estará reprovado.
*/
if (media >= 7) {
    alert(`Parabéns! A sua média final foi de ${media} pontos, você está aprovado.`);
} else {
    alert(`Sua média foi de ${media} pontos, infelizmente você foi reprovado.`);
}