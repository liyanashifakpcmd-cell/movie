import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MovieDetails() {
      const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    const getMovieDetails = async () => {

      try {

        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=af55e318`
        )

        if (response.data.Response === "True") {

          setMovie(response.data)

        } else {

          setError("Movie details not found")

        }

      } catch (error) {

        setError("Something went wrong")

      }

      setLoading(false)
    }

    getMovieDetails()

  }, [id])

  if (loading) {
    return <h2 className="loading">Loading...</h2>
  }

  if (error) {
    return <h2 className="error">{error}</h2>
  }

  return (
<div className="details-page ">

      <button
        className="back-btn m-2 rounded-pill"
        onClick={() => navigate('/')}
      >
         Back to Search
      </button>

      <div className="details-container text-center">

        <img
          src={movie.Poster}
          alt={movie.Title}
        />

        <div className="details-info">

          <h1>{movie.Title}</h1>

          <p><b>Year:</b> {movie.Year}</p>

          <p><b>IMDb Rating:</b> {movie.imdbRating}</p>

          <p><b>Genre:</b> {movie.Genre}</p>

          <p><b>Director:</b> {movie.Director}</p>

          <p><b>Actors:</b> {movie.Actors}</p>

          <p><b>Runtime:</b> {movie.Runtime}</p>

          <p><b>Language:</b> {movie.Language}</p>

          <p> <b>Awards:</b> {movie.Awards}</p>

          <p>
             <b>Plot:</b> {movie.Plot}
          </p>

        </div>

      </div>

    </div>
  )
}

export default MovieDetails
