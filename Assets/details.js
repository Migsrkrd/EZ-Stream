const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('movieId');

const apiUrl = `https://streaming-availability.p.rapidapi.com/details?movieId=${movieId}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3be1ac396amshe2fa436f11c9072p16cae8jsn66d18205d426',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
};

async function fetchMovieDetails() {
    try {
        const response = await fetch(apiUrl, options);
        const movieData = await response.json();
        displayMovieDetails(movieData);
    } catch (error) {
        console.error(error);
    }
}

function displayMovieDetails(movieData) {
    document.getElementById('movieTitle').innerText = movieData.title;
    document.getElementById('movieReleaseDate').innerText = movieData.releaseDate;
    document.getElementById('movieRating').innerText = movieData.rating;
    document.getElementById('movieOverview').innerText = movieData.overview;
    document.getElementById('moviePoster').src = movieData.posterURL;
    const streamingServices = movieData.streamingServices.slice(0, 3);  

    const servicesList = document.getElementById('streamingServicesList');
    servicesList.innerHTML = ''; 

    streamingServices.forEach(service => {
        const listItem = document.createElement('li');
        listItem.innerText = service.name;  
        servicesList.appendChild(listItem);
    });
}
fetchMovieDetails();