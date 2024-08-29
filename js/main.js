
let section2 = document.getElementById("section2");

fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=f99a4b0c91e28a26cf2a2a173e118dad&language=en-US&page=1")
.then(response => response.json())
.then(data=> {

    console.log(data.results)
    let results = data.results;


    for ( var i = 0 ; i < results.length ; i++ ){

        section2.innerHTML +=
        `
        <div class="movie" id="movie">
            <img src="http://image.tmdb.org/t/p/w500/${results[i].poster_path}">
            <div class="aboutmovie">
            <h2>${results[i].title}</h2>
            <p class="p1">${results[i].overview}</p>
            <p class="p2">Rate : ${results[i].vote_average}</p>
            <p class="p3">Date : ${results[i].release_date}</p>
            </div>
        </div>

        `
    }
})