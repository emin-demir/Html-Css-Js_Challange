const toggle = document.getElementById('toggle');
const checkbox = document.getElementById('checkbox');

toggle.addEventListener("change", (e) => {
        document.body.classList.toggle("dark",
        e.target.checked)

        checkbox.classList.toggle("white",e.target.checked)
        
});
