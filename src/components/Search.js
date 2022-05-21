export const Search =  ({setSearchKey, searchArtists}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-4 mb-4">
                       
            <form className="d-flex justify-content-center" onSubmit={() => searchArtists()}> 
                <input             
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search"
                  onChange={e => setSearchKey(e.target.value)}
                />        
              <button
                className="btn btn-outline-success"
                type="submit">
                  Search
              </button>
            </form>

          </div>       
        </div>  
      </div>
    </>
  )
}


