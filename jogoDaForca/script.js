let todasPalavra =["arroz","feijao","gato","lony","batata","hentai","vermelho","amor","gaby"]
let palavra = todasPalavra[Math.floor(Math.random() * todasPalavra.length)];

let arrayResposta = [];

for(let i = 0; i < palavra.length; i++){
  arrayResposta[i] = "_";
}

let letrasSobrando = palavra.length;

while(letrasSobrando > 0){
  alert(arrayResposta.join(" "));
  var chute = prompt("Chute uma letra, ou aperte em cancelar para parar de jogar.");
  let chutetlc = chute.toLowerCase();
  if (chutetlc === null) {
  break;
  } else if (chutetlc.length !== 1) {
 alert("Digite uma unica letra!");
} else {
  for (var j = 0; j < palavra.length; j++) {
     if (palavra[j] === chutetlc) {
     arrayResposta[j] = chutetlc;
     letrasSobrando--;
     }
    }
}

}
alert(arrayResposta.join(" "));
alert("Parabens, a palavra é " + palavra);
