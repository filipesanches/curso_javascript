var p = document.getElementsByTagName('p')
var img = document.getElementsByTagName('div')[2]
var data = new Date()
p[0].innerText = `Agora são ${data.getHours()}H e ${data.getMinutes()}min`
document.onload = horario()
function horario() {
  if (data.getHours() >= 0 && data.getHours() < 12) {
    document.querySelector('body').style.backgroundColor = 'rgb(126 194 218)'
    p[1].innerText = 'Tenha um bom dia!'
    img.style.backgroundImage = 'url(img/manha.jpg)'
  } else if (data.getHours() >= 12 && data.getHours() < 18) {
    document.querySelector('body').style.backgroundColor = 'rgb(149 83 21)'
    p[1].innerText = 'Tenha uma boa tarde!'
    img.style.backgroundImage = 'url(img/tarde.jpg)'
  } else {
    document.querySelector('body').style.backgroundColor = '#0b212b'
    p[1].innerText = 'Tenha uma boa noite!'
    img.style.backgroundImage = 'url(img/noite.jpg)'
  }
}