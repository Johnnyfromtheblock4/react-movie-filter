const initialsMovies = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  <>
    <div className="container my-5">
      <div className="row gy-4">
        <div className="col-12">
          <h1>Movies Filter</h1>
        </div>
        <div className="col-12">
          <ul className="list-group ms-0">
            {}
          </ul>
        </div>
      </div>
    </div>
  </>;
}

export default App;
