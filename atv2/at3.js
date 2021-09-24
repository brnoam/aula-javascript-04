



var atividades = ["comer","estudar","assistir","dormir","jogar","ouvir música"];
atividades.reverse ();
console.log (atividades.slice(3,6));
console.log (atividades.join ("-"));



//* Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.//


var atividades2 = ["ler","digitar"];
var novasatv = atividades.concat (atividades2);
console.log (novasatv);