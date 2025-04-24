
function toggleDropdown() {
    if ($('#dropdown-menu').css("display") === "none") {
        $('#dropdown-menu').show() 
    } else {
        $('#dropdown-menu').hide()
    }

    // $('#dropdown-menu').css("display") === "none" ? $('#dropdown-menu').show() : $('#dropdown-menu').hide()

}

$('#burger-button').click(toggleDropdown)


// When you click the element that has the ID of burger-button the function
// toggleDropdown will run 
// When toggleDrowndown runs if the element with the id dropdown-menu has a css set as 
// display of none it will set the css display to show if it has a css display 
// of anything else then it will set it to hide 







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


