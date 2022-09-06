const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];

sounds.forEach((sound) =>{
    const btn = document.createElement("button")

    btn.classList.add("btn")

    btn.innerText = sound
    document.body.appendChild(btn)

    btn.addEventListener("click",()=> {
            btn.classList.add("delete")
            document.getElementById(sound).play();
        setTimeout(()=>{
            document.body.removeChild(btn)
            btn.classList.remove("delete")
        },1000)
        setTimeout(()=>{
            document.body.appendChild(btn)
        },5000)
    })
})
