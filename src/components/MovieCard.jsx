import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieCard({ movie }) {

  const navigate = useNavigate()

  return (

    <div className="card bg-secondary text-white h-100 shadow">

      <img
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/300x450'
        }
        className="card-img-top"
        alt={movie.Title}
        style={{ height: '350px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
      />

      <div className="card-body">

        <h5 className="card-title">
          {movie.Title}
        </h5>

        <p className="card-text">
           {movie.Year}
        </p>

      </div>

    </div>
  )
}

export default MovieCard