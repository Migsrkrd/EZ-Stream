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

    searchMovies(inputString);
    searchTVShows(inputString);
}

function searchMovies(inputString) {
    let movieUrl = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(inputString)}`;

    getApi(movieUrl).then(data => {
        if (data && data.results) {
            displayResults(data.results, 'movie');
        } else {
            console.log('Unexpected data structure:', data);
        }
    });
}

function searchTVShows(inputString) {
    let tvUrl = `${TMDB_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(inputString)}`;

    getApi(tvUrl).then(data => {
        if (data && data.results) {
            displayResults(data.results, 'tv');
        } else {
            console.log('Unexpected data structure:', data);
        }
    });
}

function displayResults(results, type) {
    let resultDiv = document.getElementById('searchResults');
    let row = createNewRow();

    results.forEach((item, index) => {
        let imagePath = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'Assets/posterimage.png';
        let title = type === 'movie' ? item.title : item.name;
        let releaseDate = type === 'movie' ? item.release_date : item.first_air_date;

        row.innerHTML += `
        <a href="details.html?${type}Id=${item.id}" class="${type}">
            <img src="${imagePath}" alt="${title}">
            <p>${title} (${new Date(releaseDate).getFullYear()})</p>
            <p>Rating: ${item.vote_average}</p>
        </a>`;
    
        if ((index + 1) % 5 === 0 || index === results.length - 1) {
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
        addToSearchHistory(inputString.trim());
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

function addToSearchHistory(searchTerm) {
    let searchHistory = JSON.parse(localStorage.getItem('ezStreamSearchHistory') || '[]');
    
    if (searchHistory.indexOf(searchTerm) === -1) {
        searchHistory.push(searchTerm);
        while (searchHistory.length > 5) {
            searchHistory.shift();
        }
        localStorage.setItem('ezStreamSearchHistory', JSON.stringify(searchHistory));
    }

    displaySearchHistory();
}

function displaySearchHistory() {
    let searchHistory = JSON.parse(localStorage.getItem('ezStreamSearchHistory') || '[]');
    let historyList = document.getElementById('searchHistoryList');
    historyList.innerHTML = ''; 

    for (let term of searchHistory.reverse()) {
        let li = document.createElement('li');
        li.textContent = term;
        historyList.appendChild(li);
    }
}
document.addEventListener('DOMContentLoaded', displaySearchHistory);