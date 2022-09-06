const count = document.querySelector("#value")
let number = 0
const decreese = document.querySelector("#decreese")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")

decreese.addEventListener("click",function() {
    number --
    count.textContent = number 
    if(number < 0) {
        count.style.color = "red" 
    }
})
reset.addEventListener("click",function() {
    number = 0
    count.textContent = number 
    if(number === 0) {
        count.style.color = "black" 
    }
})

increase.addEventListener("click",function() {
    number ++
    count.textContent = number
    if(number > 0) {
        count.style.color = "green" 
    } 
})