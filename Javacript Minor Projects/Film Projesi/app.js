class Request {

     get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}

const request = new Request();
let dSKD
let albums
request.get("https://jsonplaceholder.typicode.com/users")
.then(albums => {dSKD = albums
    console.log(dSKD)
})


.catch(err => console.log(err))