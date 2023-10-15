document.addEventListener('DOMContentLoaded', function() {
    function getMovieIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('movieId');
    }

    async function fetchMovieDetails(movieId) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6a68f26813b3c5095ce117f409c6693c&language=en-US`);
            const data = await response.json();
            document.getElementById('moviePoster').src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
            document.getElementById('movieTitle').textContent = data.title;
            document.getElementById('movieReleaseDate').textContent = data.release_date;
            document.getElementById('movieRating').textContent = data.vote_average;
            document.getElementById('movieOverview').textContent = data.overview;
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    }

    async function fetchMovieProviders(movieId) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=6a68f26813b3c5095ce117f409c6693c`);
            const data = await response.json();
            const providers = data.results.US ? data.results.US.flatrate : [];
            const topProviders = providers.slice(0, 3);        
            const providerList = document.createElement('ul');
            topProviders.forEach(provider => {
                const listItem = document.createElement('li');
                listItem.textContent = provider.provider_name;
                providerList.appendChild(listItem);
            });
            document.querySelector('.movie-details').appendChild(providerList);
        } catch (error) {
            console.error("Error fetching movie providers:", error);
        }
    }
    const movieId = getMovieIdFromUrl();
    if (movieId) {
        fetchMovieDetails(movieId);
        fetchMovieProviders(movieId);
    } else {
        console.error("Movie ID not found in the URL");
    }

});

function getMovieIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('movieId');
}