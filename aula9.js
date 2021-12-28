var idade
var msg = [`Voce tem ${idade}.`, `Campo idade obrigatorio`]
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