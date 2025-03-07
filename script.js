
const fullNav = document.querySelector('#full-nav');
const burgerNav = document.querySelector('#burger-nav');
const dropdownMenu = document.querySelector('#dropdown-menu')

function navResize () {
    dropdownMenu.style.display = 'none'
    if (window.innerWidth < 1100) {
        fullNav.style.display="none"
        burgerNav.style.display=""
    } else {
        burgerNav.style.display="none"
        fullNav.style.display=""  
    }
}

window.addEventListener ("resize", navResize)
window.addEventListener ("load", navResize)

function toggleDropdown() {
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display=""
    } else {
        dropdownMenu.style.display='none'
    }
}

burgerNav.addEventListener("click", toggleDropdown) 
