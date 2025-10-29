// Perguntando ao usuário em que turno ele estuda
const turno = prompt('Olá! Por favor informe em qual turno você estuda. (Insira "M" para matutino ou "N" para noturno)').toUpperCase();

// Caso o aluno seja do turno matutino, diga "bom dia", caso seja do noturno, diga "boa noite"
if (turno == 'M') {
    alert('Sendo assim, bom dia!');
} else {
    alert('Nesse caso, boa noite!');
}