export const Search =  ({setSearchKey, searchArtists}) => {
  return (
    <>

    <div class="container">
      <div class="row">
        <div class="col mt-4">          

          <form className="d-flex justify-content-center" onSubmit={searchArtists}> 
              <input             
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

        </div>       
      </div>  
    </div>

    </>
  )
}


