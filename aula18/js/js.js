let numero = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let valores = []
let resultado = document.getElementsByTagName('div')[1]
let btnAdd = document.querySelector('input[value=Adicionar]')
let btnFim = document.querySelector('input[value=Finalizar]')

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true    
  } else {
    return false   
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true    
  } else {
    return false
  }
}

function adicionar() {
  let item = document.createElement('option')
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value))
    item.text = `Valor ${numero.value} adicionado`
    lista.appendChild(item)
    resultado.innerHTML = ''
  } else {
    alert('Valor invalido ou ja encontrado na lista')
  }
  numero.value = ''
  numero.focus()
}

function finalizar() {
  if (valores.length == 0){
    alert('Adicione Valores antes de finalizar!')
    numero.focus()
  } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior)
      maior = valores[pos]
      if (valores[pos] < menor)
      menor = valores[pos]
    }
    
    media = soma / total
    resultado.innerHTML = ''
    resultado.innerHTML += `<p>Temos ${total} números cadastrados</p>`
    resultado.innerHTML += `<p>O menor valor cadastrado é ${menor}</p>`
    resultado.innerHTML += `<p>O maior valor cadastrado é ${maior}</p>`
    resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    resultado.innerHTML += `<p>A média é ${media}</p>`

  }
}


btnAdd.addEventListener('click', adicionar)
btnFim.addEventListener('click', finalizar)