import React from 'react'
import "./MovieCard.css"
const MovieCard = ({ movies, setmovies, error }) => {
  return (
    <div className="mainContainer">

      {movies.map((ele) => {
        return (<div className="card">
          <h2>{ele.Title}</h2>
          <img src={ele.Poster} alt={"Img Not Found"} />
          <div className="bottomContainer">

            <h3>({ele.Year})</h3>
          </div>
        </div>
        )
      })}

    </div>
  )
}

export default MovieCard
