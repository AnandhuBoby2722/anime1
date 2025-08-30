document.addEventListener('DOMContentLoaded', () => {
  const animeGrid = document.getElementById('anime-grid');
  const searchInput = document.getElementById('search');

  fetch('data/anime.json')
    .then(response => response.json())
    .then(animeList => {
      displayAnime(animeList);

      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filtered = animeList.filter(anime => 
          anime.title.toLowerCase().includes(searchTerm)
        );
        displayAnime(filtered);
      });
    });

  function displayAnime(animes) {
    animeGrid.innerHTML = '';
    animes.forEach(anime => {
      const card = document.createElement('div');
      card.classList.add('anime-card');
      card.innerHTML = `
        <a href="anime.html?id=${anime.id}">
          <img src="${anime.image}" alt="${anime.title}">
          <h3>${anime.title}</h3>
        </a>
      `;
      animeGrid.appendChild(card);
    });
  }
});
