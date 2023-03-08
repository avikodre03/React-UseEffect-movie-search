
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import SearchMovies from './Components/SearchMovies';

function App() {
  const [movieName, setmovieName] = useState("man")
  const [searchValue, setsearchValue] = useState(movieName)
  const [movies, setmovies] = useState([])
  const [error, seterror] = useState("")

  useEffect(() => {

    const data = async () => {
      if (searchValue !== "") {
        const Responce = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=d903b998`)
        const data = await Responce.json()
        console.log("data", data);


        if (data.Response === "True") {
          setmovies(data.Search)
          seterror("")
        } else {
          seterror("Please Enter Valid Movie Name !!")

        }
      }

    }
    data()
  }, [searchValue])
  return (
    <div className="App">

      <SearchMovies searchValue={searchValue} setsearchValue={setsearchValue}
        movieName={movieName} setmovieName={setmovieName} error={error} />
      <MovieCard movies={movies} setmovies={setmovies} error={error} />
    </div>

  );
}

export default App;
