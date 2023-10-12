const TMDB_API_KEY = '6a68f26813b3c5095ce117f409c6693c';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

function getApi(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .catch(error => {
            console.log('There was a problem with the fetching the data:', error.message);
        });
}

function searchTitle() {
    let inputString = document.getElementById('mediaSearch').value;

    if (!inputString || inputString.trim() === "") {
        alert("Please enter a valid title");
        return;
    }

    let formattedUrl = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(inputString)}`;
    
    getApi(formattedUrl).then(data => {
        if (data && data.results) {
            displayResults(data.results);
        } else {
            console.log('Unexpected data structure:', data);
        }
    });
}


function displayResults(movies) {
    let resultDiv = document.getElementById('searchResults');
    resultDiv.innerHTML = "";

    movies.forEach(movie => {
        let posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'path_to_default_image.jpg';
        resultDiv.innerHTML += `
        <div class="movie">
            <img src="${posterPath}" alt="${movie.title}">
            <p>${movie.title} (${new Date(movie.release_date).getFullYear()})</p>
            <p>Rating: ${movie.vote_average}</p>
        </div>`;
    });
}

document.getElementById('mediaSearchID').addEventListener('click', searchTitle);
//add top ten html
//add top ten css
//add carousel below header
//add functionality to search bar in main
    //create bland getApi function
    //make a function to take in a string
    //use a modal, if input is an invalid string, warn and tell user as well as do not accept
    //take in valid string and trim
    //connect get api funciton to format input string
    //set local storage for: first imdb array (title, image, the year of release, stars, qid(movie or tv show)), and service types,
    //get from local storage the above info to display onto page in its given slots
//add imdb javascript api call and display
