import { useState, useEffect } from "react";

const initialsMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  // variabile per selezionare il tipo di genere
  const [genre, setGenre] = useState("");
  const [movies, setMovies] = useState(initialsMovies);

  // useEffect per filtrare nell'array
  useEffect(() => {
    if (genre !== "") {
      const selectedMovies = initialsMovies.filter(
        (movie) => movie.genre === genre
      );
      setMovies(selectedMovies);
    } else {
      setMovies(initialsMovies);
    }
  }, [genre]);

  return (
    <>
      <div className="container my-5">
        <div className="row gy-4">
          <div className="col-12">
            <h1>Movies Filter</h1>
          </div>

          <div className="col-12">
            <select
              name=""
              id=""
              className="form-select my-3"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">Seleziona genere</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>

            <ul className="list-group ms-0">
              {movies.map((movie, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {movie.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
