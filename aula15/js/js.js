let numero = document.getElementById('num')
let resTabuada = document.getElementById('tabuada')
document.getElementsByTagName('input')[1].addEventListener('click', function() {
  if (numero.value.length == 0) {
    alert('Insira um número!')
  } else {
    let n = Number(numero.value)
    resTabuada.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
      let itens = document.createElement('option')
      itens.text = `${n.toString()} x ${c} = ${n*c}`
      itens.value = `iten${c}`
      resTabuada.appendChild(itens)
    }
    //Segunda maneira de fazer
    /*
    let n = Number(numero.value)
    let c = 1
    resTabuada.innerHTML = ''
    while (c <= 10) {
      let itens = document.createElement('option')
      itens.text = `${n.toString()} x ${c} = ${n*c}`
      itens.value = `iten${c}`
      resTabuada.appendChild(itens)
      c++     
    }
    */
  }
}
)