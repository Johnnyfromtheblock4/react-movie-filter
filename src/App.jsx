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
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [search, setSearch] = useState("");
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieGenre, setNewMovieGenre] = useState("");

  // // useEffect per filtrare nell'array
  // useEffect(() => {
  //   if (genre !== "") {
  //     const selectedMovies = initialsMovies.filter(
  //       (movie) => movie.genre === genre
  //     );
  //     setMovies(selectedMovies);
  //   } else {
  //     setMovies(initialsMovies);
  //   }
  // }, [genre]);

  // // filtra per titolo
  // useEffect(() => {
  //   if (search != "") {
  //     const selectedMovies = initialsMovies.filter(
  //       (movie) => movie.title.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setMovies(selectedMovies);
  //   } else {
  //     setMovies(initialsMovies);
  //   }
  // }, [search]);

  // ottimizzato
  useEffect(() => {
    let updatedMovies = movies;

    if (genre) {
      updatedMovies = updatedMovies.filter((movie) => movie.genre === genre);
    }

    if (search) {
      updatedMovies = updatedMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredMovies(updatedMovies);
  }, [genre, search, movies]);

  // aggiungi film
  const addMovie = (e) => {
    e.preventDefault();

    if (newMovieTitle !== "" && newMovieGenre !== "") {
      const copy = [...movies, { title: newMovieTitle, genre: newMovieGenre }];
      setMovies(copy);
      setNewMovieTitle("");
      setNewMovieGenre("");
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row gy-4">
          <div className="col-12">
            <h1>Movies Filter</h1>
          </div>
          <div className="col-12">
            <div className="d-flex">
              <div className="w-50 me-2">
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
              </div>
              <div className="w-50">
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Filtra per nome"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <ul className="list-group ms-0">
              {filteredMovies.map((movie, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {movie.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-12">
            <form onSubmit={addMovie}>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Aggiungi film"
                  value={newMovieTitle}
                  onChange={(e) => setNewMovieTitle(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Aggiungi titolo"
                  value={newMovieGenre}
                  onChange={(e) => setNewMovieGenre(e.target.value)}
                />
                <button className="btn btn-success">Aggiungi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
