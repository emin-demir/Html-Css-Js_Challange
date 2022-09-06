const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const x = Math.floor(Math.random() *256)
    const y = Math.floor(Math.random() *256)
    const z = Math.floor(Math.random() *256)
    document.body.style.background = 'rgb(' + x + ',' + y + ',' + z + ')';
});
