const pwEl = document.getElementById("pw")
const copyEl = document.getElementById("copy")
const lenEl = document.getElementById("len")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generateEl = document.getElementById("generate")

const numbers = "0123456789"
const lowerletters = "abcdefghijklmnoprstuvyz"
const upperletters = "ABCDEFGHIJKLMNOPRSTUVYZ"
const symbols = "!@$#%/*-+(){[]}"

function getUpperCase() {
    return upperletters[Math.floor(Math.random() * upperletters.length)]
}
function getLowerCase() {
    return lowerletters[Math.floor(Math.random() * lowerletters.length)]
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(){

    const len = lenEl.value;

    let password = "";

    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }
    pwEl.innerText = password;
}
function generateX(){
    const xs = [];
    if(upperEl.checked){
        xs.push(getUpperCase())
    }
    if(lowerEl.checked)[
        xs.push(getLowerCase())
    ]
    if(numberEl.checked)[
        xs.push(getNumber())
    ]
    if(symbolEl.checked)[
        xs.push(getSymbol())
    ]
    if(xs.length === 0) return "";
    
    return xs [Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener("click", () =>{
    generatePassword()

})




copyEl.addEventListener("click", () =>{
    copyPwd()
})

function copyPwd(){
    
    const password = pwEl.innerText;
    if(!password) return"";


    password.select();
    navigator.clipboard.writeText(password)    

}