
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

/* slider settings on homepage*/
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf (activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


