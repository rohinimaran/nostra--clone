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