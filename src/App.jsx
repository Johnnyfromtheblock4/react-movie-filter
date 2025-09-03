const initialsMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  return (
    <>
      <div className="container my-5">
        <div className="row gy-4">
          <div className="col-12">
            <h1>Movies Filter</h1>
          </div>
          <div className="col-12">
            <select name="" id="" className="form-select my-3">
              <option value="">Seleziona genere</option>
              {initialsMovies.map((movie, index) => {
                return <option value={movie.genre} key={`genre-${index}`}>{movie.genre}</option>;
              })}
            </select>

            <ul className="list-group ms-0">
              {initialsMovies.map((movie, index) => {
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
