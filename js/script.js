document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu-icon").addEventListener("click", menuHamburgerClick);
    document.getElementById("close").addEventListener("click", menuClose);
});

function menuHamburgerClick() {
    var ham = document.getElementById('menu')
    ham.style.display = (ham.style.display == 'none') ? 'flex' : 'none'
}

function menuClose() {
    var ham = document.getElementById('menu')
    ham.style.display = (ham.style.display == 'flex') ? 'none' : 'flex'
}