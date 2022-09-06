// Elementleri seçme
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}
function getData(e) {
    let username = nameInput.value.trim();

    if (username === "") {
        console.log("Lütfen bir değer giriniz")
    }
    else {
        github.getGitHubData(username)
            .then(response => {
                if (response.user.message == "Not Found") {
                    //Hata mesajı
                    ui.showError("Kullanıcı Bulunamadı")
                }
                else {
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
    }
    ui.clearInput();
    e.preventDefault();
}
function clearAllSearched() {
    // Tüm arananları temizle
    if (confirm("Emin misiniz ?")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedUserFromUI();

    }

}
function getAllSearched() {
    // Arananları Storagedan al ve UI ye ekle

    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;
    });

    lastUsers.innerHTML = result;

}