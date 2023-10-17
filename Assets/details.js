document.addEventListener('DOMContentLoaded', function() {
    function getIdAndTypeFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('movieId')) {
            return { id: urlParams.get('movieId'), type: 'movie' };
        }
        if (urlParams.get('tvId')) {
            return { id: urlParams.get('tvId'), type: 'tv' };
        }
        return null;
    }

    async function fetchDetails(id, type) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=6a68f26813b3c5095ce117f409c6693c&language=en-US`);
            const data = await response.json();

            const posterImagePath = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : 'Assets/posterimage.png';
    
            document.getElementById('moviePoster').src = posterImagePath;
            document.getElementById('movieTitle').textContent = data.title || data.name; 
            document.getElementById('movieReleaseDate').textContent = data.release_date || data.first_air_date; 
            const movieRatingElement = document.getElementById('movieRating');
            movieRatingElement.textContent = `IMDB Rating: ${data.vote_average}`;    
            document.getElementById('movieOverview').textContent = data.overview;
            document.getElementById('moviePoster').addEventListener('click', function() {
                saveToHistory(data, detailsInfo.type); 
            });
        } catch (error) {
            console.error("Error fetching details:", error);
        }
    }

    async function fetchProviders(id, type) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=6a68f26813b3c5095ce117f409c6693c`);
            const data = await response.json();
            const providers = data.results.US ? data.results.US.flatrate : [];
            
            const streamingServicesList = document.getElementById('streamingServicesList');
            streamingServicesList.innerHTML = '';

            if (providers.length === 0) {
                const placeholderMessage = document.createElement('li');
                placeholderMessage.textContent = 'This movie/TV show is not available on any streaming services at the moment.';
                streamingServicesList.appendChild(placeholderMessage);
            } else {
                const topProviders = providers.slice(0, 3);        
                topProviders.forEach(provider => {
                    const listItem = document.createElement('li');
                    listItem.textContent = provider.provider_name;
                    streamingServicesList.appendChild(listItem);
                });
            }
        } catch (error) {
            console.error("Error fetching providers:", error);
        }
    }

    const detailsInfo = getIdAndTypeFromUrl();
    if (detailsInfo) {
        fetchDetails(detailsInfo.id, detailsInfo.type);
        fetchProviders(detailsInfo.id, detailsInfo.type);
    } else {
        console.error("ID or type not found in the URL");
    }
});
    