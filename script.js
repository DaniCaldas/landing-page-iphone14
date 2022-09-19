function imgSlider(e){
    let phone = document.querySelector('#phone').src = e
}

function backgroudColor(color){
    let circle = document.querySelector('.circulo').style.background = color
}
function colorsName(e){
    let h1 = document.querySelector('.color-name').innerText = e
}
function nameColors(e){
    let name = document.querySelector('.color-name').style.color = e
}

function menuBar(){
    let menu = document.getElementById('menu-bar')
    let menuBurguer = document.getElementById('burguer')

    menuBurguer.classList.toggle('burguer-menu')
    menu.classList.toggle('checked')
}