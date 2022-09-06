const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {

    getUser(user);
    search.value = "";
  }
});
getUser("florinpop17");
async function getUser(user) {
  const resp = await fetch(APIURL + user);
  const respData = await resp.json();
  createUser(respData);
  getRepos(user);
}

async function getRepos(user) {
  const resp = await fetch(APIURL + user + "/repos");
  const respData = await resp.json();
  addReposToCard(respData);
}
function createUser(user) {
  const card = ` 
  <div class="card">
    <div>
    <img src="${user.avatar_url} alt="${user.name}"/>
    </div>
        <div class="user-info">
          <h3>${user.login}</h3>
          <h5>${user.company}</h5>
          <p>${user.bio}</p>
          <ul>
            <li><i class="fas fa-eye eyes"></i><strong>${user.followers}</strong></li>
            <li><i class="fas fa-heart hrt"></i><strong>${user.following}</strong></li>
            <li><i class="fas fa-comment-alt mes"></i></i><strong>${user.public_repos}</strong></li>
          </ul>
          <h4>Repos:</h4>
          <div id="repos"></div>
      </div>
  `;
  main.innerHTML = card;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");

      repoEl.href = repo.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = repo.name;
      reposEl.appendChild(repoEl);
    });
}
