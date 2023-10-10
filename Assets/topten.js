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
        //number one done -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("twoHeader").textContent = data.data[1].titleText.text;
        document.getElementById("imgTwo").src = data.data[1].primaryImage.imageUrl
        document.getElementById("plotTwo").textContent = data.data[1].plot.plotText.plainText
        document.getElementById("mediaTypeTwo").textContent = "type: " + data.data[1].titleType.text;
        document.getElementById("releaseYearTwo").textContent = "Year of Release: "+data.data[1].releaseDate.year;
        document.getElementById("mediaServiceTwo").textContent = data.data[1].watchOptionsByCategory.categorizedWatchOptionsList[0].watchOptions[0].title.value;
        //number two done ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("threeHeader").textContent = data.data[2].titleText.text;
        document.getElementById("imgThree").src = data.data[2].primaryImage.imageUrl
        document.getElementById("plotThree").textContent = data.data[2].plot.plotText.plainText
        document.getElementById("mediaTypeThree").textContent = "type: " + data.data[2].titleType.text;
        document.getElementById("releaseYearThree").textContent = "Year of Release: "+data.data[2].releaseDate.year;
        document.getElementById("mediaServiceThree").textContent = data.data[2].watchOptionsByCategory.categorizedWatchOptionsList[0].watchOptions[0].title.value;
        //number three done ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("fourHeader").textContent = data.data[3].titleText.text;
        document.getElementById("imgFour").src = data.data[3].primaryImage.imageUrl
        document.getElementById("plotFour").textContent = data.data[3].plot.plotText.plainText
        document.getElementById("mediaTypeFour").textContent = "type: " + data.data[3].titleType.text;
        document.getElementById("releaseYearFour").textContent = "Year of Release: "+data.data[3].releaseDate.year;
        document.getElementById("mediaServiceFour").textContent = data.data[3].watchOptionsByCategory.categorizedWatchOptionsList[0].watchOptions[0].title.value;
        //number four done -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("fiveHeader").textContent = data.data[4].titleText.text;
        document.getElementById("imgFive").src = data.data[4].primaryImage.imageUrl
        document.getElementById("plotFive").textContent = data.data[4].plot.plotText.plainText
        document.getElementById("mediaTypeFive").textContent = "type: " + data.data[4].titleType.text;
        document.getElementById("releaseYearFive").textContent = "Year of Release: "+data.data[4].releaseDate.year;
        document.getElementById("mediaServiceFive").textContent = data.data[4].watchOptionsByCategory.categorizedWatchOptionsList[0].watchOptions[0].title.value;
        //number five done ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("sixHeader").textContent = data.data[5].titleText.text;
        document.getElementById("imgSix").src = data.data[5].primaryImage.imageUrl
        document.getElementById("plotSix").textContent = data.data[5].plot.plotText.plainText
        document.getElementById("mediaTypeSix").textContent = "type: " + data.data[5].titleType.text;
        document.getElementById("releaseYearSix").textContent = "Year of Release: "+data.data[5].releaseDate.year;
        document.getElementById("mediaServiceSix").textContent = data.data[5].watchOptionsByCategory.categorizedWatchOptionsList[0].watchOptions[0].title.value;
        //number six done -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
    })
}

getApi(url)
