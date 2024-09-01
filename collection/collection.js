var offers =document.getElementById("offers")
var closedd=document.getElementById("close")

closedd.addEventListener("click",function(){
    offers.style.display="none"
})
var menu =document.getElementById("menu")
var navclosed=document.querySelector(".nav__titles2")
var menbar=document.querySelector(".nav__titles")

menu.addEventListener("click",function(){
    menbar.style.right="0%"
})
navclosed.addEventListener("click",function(){
    menbar.style.right="-100%"
})


document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.product input[type="checkbox"]');
    const items = document.querySelectorAll('.items-collection .options');

    function filterItems() {
       
        const selectedOptions = {
            occasion: Array.from(document.querySelectorAll('.product .choise:nth-child(1) input:checked')).map(cb => cb.nextSibling.textContent.trim()),
            colors: Array.from(document.querySelectorAll('.product .choise:nth-child(2) input:checked')).map(cb => cb.nextSibling.textContent.trim()),
            arrivals: Array.from(document.querySelectorAll('.product .choise:nth-child(3) input:checked')).map(cb => cb.nextSibling.textContent.trim())
        };

       
        items.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            const matchesOccasion = selectedOptions.occasion.length === 0 || selectedOptions.occasion.some(option => itemText.includes(option.toLowerCase()));
            const matchesColor = selectedOptions.colors.length === 0 || selectedOptions.colors.some(option => itemText.includes(option.toLowerCase()));
            const matchesArrival = selectedOptions.arrivals.length === 0 || selectedOptions.arrivals.some(option => itemText.includes(option.toLowerCase()));

            if (matchesOccasion && matchesColor && matchesArrival) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterItems);
    });

    
    filterItems();
});
