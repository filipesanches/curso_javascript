let vagas = ['fusca','gol','palio','celta','voyage']
vagas.push('tipo')
vagas.sort()
for (let pos = 0; pos < vagas.length; pos++) {
  console.log(`Vaga ${pos}, guarda o carro ${vagas[pos]}`)  
}
let procuraCarro = vagas.indexOf('celta')
if(procuraCarro <= -1){
  console.log('erro')
}else{
console.log(`O ${vagas[procuraCarro]} esta na vaga ${procuraCarro}`)
}