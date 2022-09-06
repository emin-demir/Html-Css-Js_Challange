const menuBtn = document.getElementById("btn")
const navEl = document.getElementById("nav")

menuBtn.addEventListener("click",() => {
    navEl.classList.toggle("active");
    menuBtn.classList.toggle("active");
      
})