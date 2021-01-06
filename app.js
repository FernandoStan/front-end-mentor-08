function mostrar() {
    var menu = document.getElementById('menuMobile');
    var img = document.getElementById('img');

    menu.classList.toggle('active');

    img.src = "images/icon-close.svg";
}