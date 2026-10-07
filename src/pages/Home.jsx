import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

function Home() {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e) => {

    e.preventDefault()

    if (!search.trim()) {
      setError('Please enter a movie name')
      return
    }

    setLoading(true)
    setError('')
    setMovies([])

    try {

      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=af55e318`
      )

      if (response.data.Response === 'True') {
        setMovies(response.data.Search)
      } else {
        setError('Movie not found. Try searching for another movie!')
      }

    } catch (error) {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  return (
    <div className="min-vh-100 bg-dark text-white">

      {/* Heading */}

      <div className="container py-5">

        <h1 className="text-center fw-bold mb-2">
           Movie Explorer
        </h1>

        <p className="text-center text-secondary mb-4">
          Search and explore your favorite movies
        </p>

        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {/* Loading */}

        {loading && (
          <h4 className="text-center mt-4">
            Loading...
          </h4>
        )}

        {/* Error */}

        {error && (
          <div className="alert alert-danger text-center mt-4">
            {error}
          </div>
        )}

        {/* Movies */}

        <div className="row g-4 mt-3">

          {movies.map((movie) => (

            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              key={movie.imdbID}
            >

              <MovieCard movie={movie} />

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Home