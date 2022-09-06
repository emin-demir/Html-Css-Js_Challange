const btnEl = document.getElementById("btn");
const container = document.getElementById("popup");

btnEl.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("container");

    notif.innerText = "This challenge is crazy!";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}