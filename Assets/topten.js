const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10?rapidapi-key=7ddc588895msh7be76c92a64ab8fp1cbaa4jsn721fda1e57e9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ddc588895msh7be76c92a64ab8fp1cbaa4jsn721fda1e57e9',
		'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
	}
};

function getApi(request){
    fetch(request)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

getApi(url)
