var offers = document.getElementById("offers")
var closedd = document.getElementById("close")

closedd.addEventListener("click", function () {
    offers.style.display = "none"
})
var menu = document.getElementById("menu")
var navclosed = document.querySelector(".nav__titles2")
var menbar = document.querySelector(".nav__titles")

menu.addEventListener("click", function () {
    menbar.style.right = "0%"
})
navclosed.addEventListener("click", function () {
    menbar.style.right = "-100%"
})

document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector(".image-slider");
    var leftArrow = document.querySelector(".left-arrow");
    var rightArrow = document.querySelector(".right-arrow");
    var slides = document.querySelectorAll(".header__section");
    var slideCount = slides.length;
    var currentIndex = 0;

    function updateSliderPosition() {
        var offset = -currentIndex * 100; 
        slider.style.transform = `translateX(${offset}%)`;
    }

    rightArrow.addEventListener("click", function() {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    leftArrow.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    updateSliderPosition();
});
document.addEventListener('DOMContentLoaded', () => {
    // Get all heart elements
    const hearts = document.querySelectorAll('.heart');

    // Add click event listener to each heart
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            // Toggle the 'liked' class on the clicked heart
            this.classList.toggle('liked');
        });
    });
});


