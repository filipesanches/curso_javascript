let resultado = document.getElementsByTagName('div')[1]
let inputs = document.getElementsByTagName('input')
inputs[3].addEventListener('click', contar)
function contar() {
  if (inputs[0].value.length == 0 || inputs[1].value.length == 0 || inputs[2].value.length == 0) {
    resultado.innerHTML = `<p>[ERRO]</p>`
    if (inputs[0].value.length == 0) {
      resultado.innerHTML += `<p>Insira o dado do início.</p>`
    } else if (inputs[1].value.length == 0) {
      resultado.innerHTML += `<p>Insira o dado do fím.</p>`
    } else if (inputs[2].value.length == 0) {
      resultado.innerHTML += `<p>Insira o dado do passo.</p>`
    }
  } else {
    resultado.innerHTML = `<p>Contando...</p>`
    let i = Number(inputs[0].value)
    let f = Number(inputs[1].value)
    let p = Number(inputs[2].value)
    if (p <= 0){
      resultado.innerHTML = `<p>Impossivel contar com passo 0 ou -0.</p><p>Foi considerado passo 1.</p>`
      p = 1
    }
    if (i < f){
      resultado.innerHTML += `&#128681;`
      for(let c = i; c <= f; c += p){
      resultado.innerHTML += `&#128664;${c} `
    }
    resultado.innerHTML += `&#127937;`
    } else {
      resultado.innerHTML += `&#128681;`
      for(let c = i; c >= f; c -= p){
        resultado.innerHTML += `&#128664;${c} `
      }
      resultado.innerHTML += `&#127937;`
    }
  }
}