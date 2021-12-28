var agora = new Date()
var diaSemana = 98//agora.getDay()
var idade = 98
var msg = [`Voce tem ${idade} anos.`, `Campo idade obrigatorio`]

switch (diaSemana) {
  case 0:
    console.log('Hoje é Domingo')
  break;
  case 1:
    console.log('Hoje é Segunda')
  break;
  case 2:
    console.log('Hoje é Terça')
  break;
  case 3:
    console.log('Hoje é Quarta')
  break;
  case 4:
    console.log('Hoje é Quinta')
  break;
  case 5:
    console.log('Hoje é Sexta')
  break;
  case 6:
    console.log('Hoje é Sabado')
  break;
  default:
    console.log('[ERRO] - [Ou dia da Semana não existe]')
  break;
}

if(idade == null){
  console.log(msg[1])
  console.log('Digite a idade')
}else{
  console.log(msg[0])
  if (idade < 16){
    console.log('Você não tem idade para votar')
  }else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
  }else{
    console.log('Voto Obrigatorio')
  }
}