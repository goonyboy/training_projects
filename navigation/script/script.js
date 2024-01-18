//Бургер меню с помощью добавления класса open header'у
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open")
  })
})