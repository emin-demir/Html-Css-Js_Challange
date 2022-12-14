const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const mainEl = document.querySelector("main");
const backEl = document.getElementById("back");
const forwardEl = document.getElementById("forward");
const spanEl = document.getElementById("span")
const form = document.getElementById("form");
const search = document.getElementById("search")

let page = 1
backEl.addEventListener("click", () => {
    page--
    getMovies() 
});
forwardEl.addEventListener("click", () => {   
    page++
    getMovies()
});

getMovies(APIURL);
async function  getMovies(url){
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results)
}

function showMovies(movies){
    mainEl.innerHTML = "";
    movies.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        imgSrc = IMGPATH + movie.poster_path;
        span.innerText = page
    
        movieEl.innerHTML = `
                <img
                src="${imgSrc}"
                alt=""/>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview:<h3>
                ${movie.overview}
                </div>
                `;
    
        mainEl.appendChild(movieEl);
      });
}

function getClassByRate(vote){
    if(vote >= 8){
        return "green";
    }else if (vote >= 5) {
        return "orange"
    }else{
        return "red"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm)
        search.value = ""
    }
})
