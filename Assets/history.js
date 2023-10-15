document.addEventListener('DOMContentLoaded', function() {
    let history = JSON.parse(localStorage.getItem('userHistory') || '[]');
    if (history && history.length) {
        displayResults(history);
    } else {
        // Display the no history message if there's nothing in the history
        document.getElementById('noHistoryMessage').style.display = 'block';
    }
});

function displayResults(results) {
    let resultDiv = document.getElementById('historyContainer');
    let row = createNewRow();

    results.forEach((item, index) => {
        let imagePath = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'Assets/posterimage.png';
        let title = item.title; // Assuming history items always have a title attribute
        let releaseDate = item.release_date;

        row.innerHTML += `
        <a href="details.html?${item.type}Id=${item.id}" class="${item.type}">
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

function createNewRow() {
    let newRow = document.createElement('div');
    newRow.className = 'row';
    return newRow;
}