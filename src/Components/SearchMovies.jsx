
import "./SearchMovies.css"
import { BiCameraMovie } from "react-icons/bi";
const SearchMovies = ({ searchValue, setsearchValue, movieName, setmovieName, error }) => {

  return (


    <div className="navbar">
      <div className="heading">
        <h1><span><BiCameraMovie /> </span> Movies</h1>
      </div>
      <div className="inputContainer">
        <div className="input">

          <input type="text" placeholder="Search Movie" onChange={(e) => {
            console.log(movieName);
            setmovieName(e.currentTarget.value)
          }} />

          <button onClick={(e) => {
            console.log("clicked", searchValue)
            setsearchValue(movieName);

          }}> Search</button>

        </div>
        <p>{error}</p>
      </div>
    </div>
  )
}

export default SearchMovies