// select the input field
// add an event listener to the input field
// in the function first select all the movies
// then access each card movie title
// then check if searched value is equal to movie title
//then if it is then show only that card movie and hide the rest of the cards


const searchInput = document.getElementById('searchInput');


searchInput.addEventListener('input', function() {

    const movieCards = document.querySelectorAll('.movie-card');

    const searchValue = searchInput.value.toLowerCase();

    movieCards.forEach(function(card) {

        const movieTitle = card.querySelector('.movie-title').textContent.toLowerCase();

        if (movieTitle.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }

    });

});


document.querySelector('.search-box button').addEventListener('click', function() {
    searchInput.dispatchEvent(new Event('input'));
});