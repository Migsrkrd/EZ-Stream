const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10?rapidapi-key=7ddc588895msh7be76c92a64ab8fp1cbaa4jsn721fda1e57e9';

function getApi(request){
    fetch(request)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("data",data);
        console.log(data.data[0].plot.plotText.plainText)
        document.getElementById("imgOne").src = data.data[0].primaryImage.imageUrl
        document.getElementById("plotOne").textContent = data.data[0].plot.plotText.plainText
        document.getElementById("oneHeader").textContent = data.data[0].titleText.text;
        document.getElementById("mediaType").textContent = "type: " + data.data[0].titleType.text;
        document.getElementById("releaseYearOne").textContent = "Year of Release: "+data.data[0].releaseDate.year;
        document.getElementById("mediaService").textContent = data.data[0].watchOptionsByCategory.categorizedWatchOptionsList[0].watchOptions[0].title.value;
    })
}

getApi(url)
