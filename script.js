
const elementoImg1 = document.querySelector(".mini-g")
const elementoImg2 = document.querySelector(".mini-f")
const elementoImg3 = document.querySelector(".mini-v")
const elementoImg4 = document.querySelector(".mini-r")
const elementoImg = document.querySelector(".gta")
let carroselOn = false

elementoImg1.addEventListener("click", trocarImg1)
elementoImg2.addEventListener("click", trocarImg2)
elementoImg3.addEventListener("click", trocarImg3)
elementoImg4.addEventListener("click", trocarImg4)

let imgAtual = 1
function trocarImg1() {
    elementoImg.src = "gta-5.png"
}

function trocarImg2() {
    elementoImg.src = "fortnite.png"
}

function trocarImg3() {
    elementoImg.src = "sage-valorant-cl.jpg"
}
 
function trocarImg4() {
    elementoImg.src = "r.jpg"
}




window.addEventListener("resize", verificarTamanho)

function verificarTamanho() {
    const janela = window.outerWidth
    
    var flkty = new Flickity

    if (janela < 1000 && carroselOn === false ) {
        iniciarcarrosel()
        iniciarcarrosel2()
        carroselOn = true
    } else {
        flkty.destroy()
    }
}

function iniciarcarrosel(){
    var elem = document.querySelector('.precos');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
}

function iniciarcarrosel2(){
    var elem = document.querySelector('.tabela');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});
}










var img = document.querySelector('.menu--barra');
var escondido = document.querySelector('.escondido');

img.addEventListener('click', function() {
    if (escondido.style.display === 'block') {
        escondido.style.display = 'none';
    } else {
        escondido.style.display = 'block';
    }
});



var h4 = document.querySelector('.navegar');
var tema = document.querySelector('.tema');

h4.addEventListener('click', function() {
    if (tema.style.display === 'block') {
      tema.style.display = 'none';
    } else {
        tema.style.display = 'block';
    }
});