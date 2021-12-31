var anoNasc = document.querySelector('input#anonasc')
var data = new Date()
var ver = document.querySelector('input[type=button]')
ver.addEventListener('click', function() {
  if (anoNasc.value.length == 0 || Number(anoNasc.value) > Number(data.getFullYear())) {
    alert('[ERRO] Verifique o ano de nascimento\ne tente novamente.')
  } else {
    var sexo = document.getElementsByName('sexo')
    var idade = Number(data.getFullYear()) - Number(anoNasc.value)
    var res = document.getElementsByTagName('div')[1]
    var img = document.createElement('div')
    img.setAttribute('id', 'foto')
    
    if (sexo[0].checked == false && sexo[1].checked == false){
      alert('Escolha o sexo')
    } else {
      
      if (sexo[0].checked) {
        //Resultado para Homem
        if (Number(idade) >= 0 && Number(idade) < 13){
          img.style.backgroundImage = 'url(img/crianca_h.jpeg)'
        } else if (Number(idade) >= 13 && Number(idade) < 25){
          img.style.backgroundImage = 'url(img/jovem_h.jpeg)'
        } else if (Number(idade) >= 25 && Number(idade) < 60){
          img.style.backgroundImage = 'url(img/homem.jpeg)'
        } else {
          img.style.backgroundImage = 'url(img/idoso.jpeg)'
        }
        res.innerHTML = `Detectamos genero ${sexo[0].value} de ${idade} anos`
        res.appendChild(img)
      } else if (sexo[1].checked) {
        //Resultado para mulher
        if (Number(idade) >= 0 && Number(idade) < 13){
          img.style.backgroundImage = 'url(img/crianca_m.jpg)'
        } else if (Number(idade) >= 13 && Number(idade) < 25){
          img.style.backgroundImage = 'url(img/jovem_m.jpeg)'
        } else if (Number(idade) >= 25 && Number(idade) < 60){
          img.style.backgroundImage = 'url(img/mulher.jpeg)'
        } else {
          img.style.backgroundImage = 'url(img/idosa.jpeg)'
        }
        res.innerHTML = `Detectamos genero ${sexo[1].value} de ${idade} anos`
        res.appendChild(img)
      }
    }
  }
})

