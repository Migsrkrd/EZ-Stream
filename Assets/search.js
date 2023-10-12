var streamUrl = 'https://streaming-availability.p.rapidapi.com/search/title?title=Harry Potter&country=us&show_type=all&output_language=en&rapidapi-key=7ddc588895msh7be76c92a64ab8fp1cbaa4jsn721fda1e57e9';
var imdbLink = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=TheMummy&rapidapi-key=7ddc588895msh7be76c92a64ab8fp1cbaa4jsn721fda1e57e9&=0';


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
    let inputString = document.getElementById('mediaSearch').value.trim();

    if (!inputString) {
        alert("Please enter a valid title");
        return;
    }
    const apiKey = 'E1cqS9UwZP5Qy44utNA1URGXtynDtvwUjjd4GUY0'; 

    let formattedUrl = `https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=title&search_value=${encodeURIComponent(inputString)}`;
    
    getApi(formattedUrl).then(data => {
        if (data && data.results) {
            displayResults(data);
        } else {
            console.error("Unexpected data structure:", data);
        }
    });
}

function displayResults(data) {
    let resultDiv = document.getElementById('searchResultsContainer');
    resultDiv.innerHTML = "";
    
    data.results.forEach(item => {
        resultDiv.innerHTML += `
        <div class="movie">
            <img src="${item.image}" alt="${item.title}">
            <p>${item.title}</p>
            <p>Rating: ${item.rating ? item.rating : 'N/A'}</p>
            <p>Type: ${item.type}</p>
        </div>`;
    });
}

document.getElementById('mediaSearchID').addEventListener('click', searchTitle);

getApi(formattedUrl).then(data => {
    console.log("Raw API Response:", data);
    // further processing...
});
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
