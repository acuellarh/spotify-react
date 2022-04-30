export const Search =  ({setSearchKey, searchArtists}) => {
  return (
    <form className="d-flex mt-4" onSubmit={searchArtists}>
      <input 
        className="col-sm-4 offset-4"
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        onChange={e => setSearchKey(e.target.value)}
      />
      <button
      class="btn btn-outline-success"
        type="submit">
          Search
      </button>
    </form>
  )
}


