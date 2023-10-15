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

function searchTitle(inputString) {
    if (!inputString || inputString.trim() === "") {
        $('#alertModal').foundation('open');
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
    let row = createNewRow();

    movies.forEach((movie, index) => {
        let posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'Assets/posterimage.png';
        row.innerHTML += `
        <a href="details.html?movieId=${movie.id}" class="movie">
            <img src="${posterPath}" alt="${movie.title}">
            <p>${movie.title} (${new Date(movie.release_date).getFullYear()})</p>
            <p>Rating: ${movie.vote_average}</p>
        </a>`;
    
        if ((index + 1) % 5 === 0 || index === movies.length - 1) {
            resultDiv.appendChild(row);
            row = createNewRow();
        }
    });
}

function getQueryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('query');
}

$(document).foundation();

if(document.getElementById('mediaSearchID')) {
    document.getElementById('mediaSearchID').addEventListener('click', function() {
        let inputString = document.querySelector('textarea[name="medialook"]').value;
        
        if (!inputString || inputString.trim() === "") {
            $('#alertModal').foundation('open');
            return;
        }
        window.location.href = `results.html?query=${encodeURIComponent(inputString)}`;
    });
}

if (document.getElementById('searchResults')) {
    let query = getQueryFromURL();
    if(query) {
        document.getElementById('searchQuery').innerText = query;
        searchTitle(query);
    }
}

function createNewRow() {
    const div = document.createElement('div');
    div.classList.add('movie-row');
    return div;
}