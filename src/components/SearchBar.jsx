import React from 'react'

function SearchBar({ search, setSearch, handleSearch }) {

  return (

    <form
      onSubmit={handleSearch}
      className="d-flex justify-content-center"
    >

      <div className="input-group w-75">

        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-danger"
        >
          Search
        </button>

      </div>

    </form>
  )
}

export default SearchBar