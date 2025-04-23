import { useState } from 'react';
import './App.css';

function App() {
  // État initial avec 5 films
  const [films, setFilms] = useState([
    { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi" },
    { id: 2, title: "The Dark Knight", year: 2008, genre: "Action" },
    { id: 3, title: "Interstellar", year: 2014, genre: "Sci-Fi" },
    { id: 4, title: "Pulp Fiction", year: 1994, genre: "Crime" },
    { id: 5, title: "Parasite", year: 2019, genre: "Drama" }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Tous');
  
  // Filtrage combiné
  const filteredFilms = films.filter(film => {
    const matchesSearch = film.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'Tous' || film.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  // Récupération des genres uniques
  const genres = ['Tous', ...new Set(films.map(film => film.genre))];

 return (
  <div className="app">
    <h1>🍿 FilmFinder</h1>
    
    <div className="controls">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <select 
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>

    <div className="film-grid">
      {filteredFilms.length > 0 ? (
        filteredFilms.map(film => (
          <div key={film.id} className="film-card">
            <h3>{film.title}</h3>
            <p>Année: {film.year}</p>
            <p>Genre: {film.genre}</p>
          </div>
        ))
      ) : (
        <p className="no-results">Aucun film ne correspond à votre recherche</p>
      )}
    </div>
  </div>
);
}

export default App;
