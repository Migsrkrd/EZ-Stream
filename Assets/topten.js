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
        //number one done -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("twoHeader").textContent = data.data[1].titleText.text;
        document.getElementById("imgTwo").src = data.data[1].primaryImage.imageUrl
        document.getElementById("plotTwo").textContent = data.data[1].plot.plotText.plainText
        document.getElementById("mediaTypeTwo").textContent = "type: " + data.data[1].titleType.text;
        document.getElementById("releaseYearTwo").textContent = "Year of Release: "+data.data[1].releaseDate.year;
        //number two done ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("threeHeader").textContent = data.data[2].titleText.text;
        document.getElementById("imgThree").src = data.data[2].primaryImage.imageUrl
        document.getElementById("plotThree").textContent = data.data[2].plot.plotText.plainText
        document.getElementById("mediaTypeThree").textContent = "type: " + data.data[2].titleType.text;
        document.getElementById("releaseYearThree").textContent = "Year of Release: "+data.data[2].releaseDate.year;
        //number three done ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("fourHeader").textContent = data.data[3].titleText.text;
        document.getElementById("imgFour").src = data.data[3].primaryImage.imageUrl
        document.getElementById("plotFour").textContent = data.data[3].plot.plotText.plainText
        document.getElementById("mediaTypeFour").textContent = "type: " + data.data[3].titleType.text;
        document.getElementById("releaseYearFour").textContent = "Year of Release: "+data.data[3].releaseDate.year;
        //number four done -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("fiveHeader").textContent = data.data[4].titleText.text;
        document.getElementById("imgFive").src = data.data[4].primaryImage.imageUrl
        document.getElementById("plotFive").textContent = data.data[4].plot.plotText.plainText
        document.getElementById("mediaTypeFive").textContent = "type: " + data.data[4].titleType.text;
        document.getElementById("releaseYearFive").textContent = "Year of Release: "+data.data[4].releaseDate.year;
        //number five done ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("sixHeader").textContent = data.data[5].titleText.text;
        document.getElementById("imgSix").src = data.data[5].primaryImage.imageUrl
        document.getElementById("plotSix").textContent = data.data[5].plot.plotText.plainText
        document.getElementById("mediaTypeSix").textContent = "type: " + data.data[5].titleType.text;
        document.getElementById("releaseYearSix").textContent = "Year of Release: "+data.data[5].releaseDate.year;
        //number six done -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("sevenHeader").textContent = data.data[6].titleText.text;
        document.getElementById("imgSeven").src = data.data[6].primaryImage.imageUrl
        document.getElementById("plotSeven").textContent = data.data[6].plot.plotText.plainText
        document.getElementById("mediaTypeSeven").textContent = "type: " + data.data[6].titleType.text;
        document.getElementById("releaseYearSeven").textContent = "Year of Release: "+data.data[6].releaseDate.year;
        //number seven done -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("eightHeader").textContent = data.data[7].titleText.text;
        document.getElementById("imgEight").src = data.data[7].primaryImage.imageUrl
        document.getElementById("plotEight").textContent = data.data[7].plot.plotText.plainText
        document.getElementById("mediaTypeEight").textContent = "type: " + data.data[7].titleType.text;
        document.getElementById("releaseYearEight").textContent = "Year of Release: "+data.data[7].releaseDate.year;
        //number eight done -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("nineHeader").textContent = data.data[8].titleText.text;
        document.getElementById("imgNine").src = data.data[8].primaryImage.imageUrl
        document.getElementById("plotNine").textContent = data.data[8].plot.plotText.plainText
        document.getElementById("mediaTypeNine").textContent = "type: " + data.data[8].titleType.text;
        document.getElementById("releaseYearNine").textContent = "Year of Release: "+data.data[8].releaseDate.year;
        //number nine done -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        document.getElementById("tenHeader").textContent = data.data[9].titleText.text;
        document.getElementById("imgTen").src = data.data[9].primaryImage.imageUrl
        document.getElementById("plotTen").textContent = data.data[9].plot.plotText.plainText
        document.getElementById("mediaTypeTen").textContent = "type: " + data.data[9].titleType.text;
        document.getElementById("releaseYearTen").textContent = "Year of Release: "+data.data[9].releaseDate.year;
    })
}

getApi(url)
